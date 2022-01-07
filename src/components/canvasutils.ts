import { SCREENSIZE } from "./useDevice";

export const getLineHeight = (device: SCREENSIZE) => {
  if (device === SCREENSIZE.MOBILE) {
    return 40;
  }
  return 35;
};
