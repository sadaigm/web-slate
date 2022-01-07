import React from "react";

type LockContextType = { islocked: boolean; setIsLocked: Function; toggleLock: Function }
export type SlateData = {
  x: number;
  y: number;
};
export type SlatePattern = {
  pattern: Array<SlateData>;
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  lineWidth?: number;
}

type DataContextType = { slatePattern: Array<SlatePattern>, loadData: Function, renderData: boolean, toggleRender: Function }
type SettingContextType = { brushColor: string, setBrushColor: Function }

export const LockContext = React.createContext({} as LockContextType);
export const SlateDataContext = React.createContext({} as DataContextType);

export const SettingContext = React.createContext({} as SettingContextType);