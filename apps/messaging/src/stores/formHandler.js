export function createStore() {
  function validate(node, value) {
    console.log(node);
    console.log(value);
  }

  return {
    validate
  };
}

const formHandlerStore = createStore();

export default formHandlerStore;
