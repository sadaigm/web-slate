const getEraser = (brushSize: number) => {
  var canvas = document.createElement("canvas");
  //   canvas.setAttribute("width", "50");
  //   canvas.setAttribute("height", "50");
  canvas.style.border = "1px solid red";

  // Width and height of canvas can
  // be varied depending on the
  // size of icon
  const radius = 2 * brushSize + 10;

  canvas.width = 50;
  canvas.height = 50;
  //   const centerX = canvas.width / 2;
  //   const centerY = canvas.height / 2;

  console.log({
    brushSize,
    radius,
    width: canvas.width,
    height: canvas.height,
  });

  // Set interval for allowing the
  // font awesome icon to load
  var context = canvas.getContext("2d");
  if (context) {
    // context.beginPath();
    // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "#9e9e9e";
    context.fillRect(0, 0, 25, 25);
    // context.fill();
    // context.lineWidth = 5;
    // context.strokeStyle = "#ffffff";
    // context.stroke();

    // Converting the canvas to image
    var dataURL = canvas.toDataURL("image/png");

    // Setting the cursor property
    // to the image created

    //   @ts-ignore
    document.body.style.cursor = "url(" + dataURL + "), auto";
  }
};
export const clearEraser = () => {
  //   @ts-ignore
  document.body.style.cursor = "default";
};
export default getEraser;
