function mainContainer(reactElementm, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", r);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("#root");

customRender(reactElement, mainContainer);
