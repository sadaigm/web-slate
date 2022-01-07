import { drawLine } from "./draw";

export const getChecked = (
    ctx: any,
    lineCount: number,
    yFactor: number,
    initialY: number,
    lineHeight: number,
    screenWidth: number,
    screenHeight: number
) => {
    if (ctx) {
        const xCount = getXCount(screenHeight, initialY, lineHeight);
        const yCount = getYCount(screenWidth, initialY, lineHeight);
        for (let index = 1; index <= 1; index++) {
            let start = yFactor + lineHeight * index;
            let color = "grey";
            if (lineCount < xCount) {
                drawLine(ctx, { x: 0, y: start }, { x: screenWidth, y: start }, color, yFactor);
            }
            if (lineCount < yCount) {
                color = "grey";
                drawLine(ctx, { x: start, y: 0 }, { x: start, y: screenHeight }, color, yFactor);
            }
        }
    }
};

export const constructCheckedSlate = (
    ctx: any,
    initialY: number,
    lineHeight: number,
    screenWidth: number,
    screenHeight: number
) => {
    lineHeight = 100;
    const xCount = getXCount(screenWidth, initialY, lineHeight);
    const yCount = getYCount(screenHeight, initialY, lineHeight);
    for (let index = 0; index < xCount || index < yCount; index++) {
        const yFactor = index * lineHeight;
        getChecked(ctx, index, yFactor, initialY, lineHeight, screenWidth, screenHeight);
    }
};
function getYCount(screenHeight: number, initialY: number, lineHeight: number) {
    return Math.floor((screenHeight) / (lineHeight));
}

function getXCount(screenWidth: number, initialY: number, lineHeight: number) {
    return Math.floor((screenWidth) / (lineHeight));
}

