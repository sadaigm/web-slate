import React from "react";
import { SettingContext } from "./context";
type SettingProviderProps = {
  initialColor?: string;
};
const SettingProvider: React.FC<SettingProviderProps> = ({
  initialColor,
  children,
}) => {
  const [brushColor, setBrushColor] = React.useState("#0d6efd");
  return (
    <SettingContext.Provider value={{ brushColor, setBrushColor }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
