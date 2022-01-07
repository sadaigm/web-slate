import React from "react";
import { screenSize } from "./const";
import useWindowSize from "./useWindowSize";

export enum SCREENSIZE {
  MOBILE,
  TABLET,
  LAPTOP,
  DEKTOP,
}

const useDevice = (): SCREENSIZE => {
  const windowSize = useWindowSize();
  const [device, setDevice] = React.useState<SCREENSIZE>(SCREENSIZE.MOBILE);
  React.useEffect(() => {
    if (windowSize.width && windowSize.width >= screenSize.desktop) {
      setDevice(SCREENSIZE.DEKTOP);
    } else if (windowSize.width && windowSize.width >= screenSize.laptop) {
      setDevice(SCREENSIZE.LAPTOP);
    } else if (windowSize.width && windowSize.width >= screenSize.tablet) {
      setDevice(SCREENSIZE.TABLET);
    }
  }, [windowSize]);

  return device;
};

export default useDevice;
