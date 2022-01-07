export  const drawLine = (
    ctx: any,
    start: any,
    end: any,
    color: string,
    yFactor: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
  };