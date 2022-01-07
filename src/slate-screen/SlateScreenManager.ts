import { SlateScreenType } from "../components/Canvas";
import { constructCheckedSlate } from "./checked";
import { constructFourLineSlate } from "./fourline";
import { constructSingleLineSlate } from "./singleline";
import { constructTwoLineSlate } from "./twoline";


export const drawSlateScreen = (ctx: CanvasRenderingContext2D | null, slateScreenType: SlateScreenType, initialY: number,
    lineHeight: number,
    screenWidth: number,
    screenHeight: number) => {
    if (ctx) {
        if (slateScreenType === SlateScreenType.FOURLINE) {
            constructFourLineSlate(
                ctx,
                initialY,
                lineHeight,
                screenWidth,
                screenHeight
            );
        } else if (slateScreenType === SlateScreenType.TWOLINE) {
            constructTwoLineSlate(
                ctx,
                initialY,
                lineHeight,
                screenWidth,
                screenHeight
            );
        } else if (slateScreenType === SlateScreenType.SINGLELINE) {
            constructSingleLineSlate(
                ctx,
                initialY,
                lineHeight,
                screenWidth,
                screenHeight
            );
        } else if (slateScreenType === SlateScreenType.CHECKED) {
            constructCheckedSlate(
                ctx,
                initialY,
                lineHeight,
                screenWidth,
                screenHeight
            );
        }
    }
};