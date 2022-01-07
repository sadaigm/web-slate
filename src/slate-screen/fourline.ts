import { drawLine } from "./draw";

export const getFourLine = (
    ctx: any,
    yFactor: number,
    initialY: number,
    lineHeight: number,
    screenWidth: number
) => {
    if (ctx) {
        for (let index = 1; index <= 5; index++) {
            let y = initialY + yFactor * 4.5 + lineHeight * index;
            let color = "blue";
            if (index === 2 || index === 3) {
                color = "red";
            } else if (index === 5) {
                color = "transparent";
                y = y - (lineHeight * 0.5)
            }
            drawLine(ctx, { x: 0, y: y }, { x: screenWidth, y: y }, color, yFactor);
        }
    }
};

export const constructFourLineSlate = (
    ctx: any,
    initialY: number,
    lineHeight: number,
    screenWidth: number,
    screenHeight: number
) => {
    const count = Math.floor((screenHeight - initialY) / (lineHeight * 4.5));
    for (let index = 0; index < count; index++) {
        const yFactor = index * lineHeight;
        getFourLine(ctx, yFactor, initialY, lineHeight, screenWidth);
    }
};
