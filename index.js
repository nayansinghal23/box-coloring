let totalBoxesClicked = 0;
let boxes = document.querySelectorAll(".box");
let storeId = [];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    document.querySelector(`#${box.id}`).style.backgroundColor = "red";
    storeId.push(box.id);
    totalBoxesClicked++;
    if (totalBoxesClicked === 7) {
      setTimeout(() => {
        revertBack();
        storeId = [];
        totalBoxesClicked = 0;
      }, 1000);
    }
  });
});

const revertBack = () => {
  storeId.map((id, index) => {
    setTimeout(() => {
      document.querySelector(`#${id}`).style.backgroundColor = "white";
    }, index * 1000);
  });
};
