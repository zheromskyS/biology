const arrow = document.querySelectorAll(".arrow");

export const switchArrow = () => {
  arrow.forEach((element) => {
    element.onmouseover = function () {
      this.classList.add("arrow__active");
    };

    element.onmouseout = function () {
      this.classList.remove("arrow__active");
    };
  });
};
