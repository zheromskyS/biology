const mainButton = document.querySelectorAll(".main-button");

export const switchButton = () => {
  mainButton.forEach((element) => {
    element.onmouseover = function () {
      this.classList.add("main-button__active");
    };

    element.onmouseout = function () {
      this.classList.remove("main-button__active");
    };
  });
};
