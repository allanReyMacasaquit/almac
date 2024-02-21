import { get, writable } from "svelte/store";

function createFormStore(initialData) {
  const form = writable(initialData);
  const errors = writable({});

  const validatorFields = {};

  function validate(node, validators = []) {
    let config;
    validatorFields[node.name] = config = { element: node, validators };

    node.onblur = checkValidity(config);
    node.oninput = () => {
      if (!get(errors)[node.name]) {
        return;
      }
      checkValidity(config)();
    };
  }

  function isValid() {
    const _errors = get(errors);
    const keys = Object.keys(_errors);

    if (keys.length === 0) {
      return false;
    }

    return keys.every((errorKey) => {
      return _errors[errorKey].length === 0;
    });
  }

  const checkValidity =
    ({ element, validators }) =>
    () => {
      errors.update((_errors) => {
        _errors[element.name] = [];
        return _errors;
      });

      for (const validator of validators) {
        const errorMessage = validator(element)(get(form));

        if (errorMessage) {
          errors.update((_errors) => {
            _errors[element.name].push(errorMessage);
            return _errors;
          });
        }
      }
    };

  const submit = (callback) => () => {
    for (const field in validatorFields) {
      const config = validatorFields[field];

      checkValidity(config)();
    }

    if (isValid()) {
      try {
        callback(get(form));
      } catch (error) {
        console.log(error.errorMessage);
      }
    }
  };

  return {
    submit,
    validate,
    value: (e) => {
      const { value, name } = e.target;
      form.update((_form) => {
        _form[name] = value;
        return _form;
      });
    },
    errors: { subscribe: errors.subscribe }
  };
}

export default createFormStore;
