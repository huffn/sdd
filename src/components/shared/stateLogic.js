const returnNewState = (el, currentState) => {
  const isAlive = el.classList.contains("alive");
  if (
    (currentState === "ALIVE" && isAlive) ||
    (currentState === "DEAD" && !isAlive)
  ) {
    return "";
  }
  return isAlive ? "ALIVE" : "DEAD";
};

export default returnNewState;
