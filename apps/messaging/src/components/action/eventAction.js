function clickOutside(node) {
  addEventListener("click", handleClick);

  function handleClick(e) {
    if (!node.contains(e.target)) {
      node.dispatchEvent(new CustomEvent("clickOutsideEvent"));
    }
  }

  return {
    destroy() {
      removeEventListener("click", handleClick);
    }
  };
}

export default clickOutside;
