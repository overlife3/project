export const getTextOffsetHeight = (ref, text, cn = "") => {
  const elem = document.createElement("div");
  if (cn) {
    elem.classList.add(...cn.split(" ")); // чтобы все стили применимые к контенту также применялись для контента вспомогательного элемента
  }
  elem.style.visibility = "hidden"; // скрываю вспомогательный элемент
  elem.style.position = "absolute"; // чтобы вспомогательный элемент вышел из основного потока
  elem.style.width = "100%";
  elem.innerHTML = text;
  ref.current.append(elem);
  return elem.offsetHeight;
};
