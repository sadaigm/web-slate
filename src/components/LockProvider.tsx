import React from "react";
import { LockContext } from "./context";
type LockProviderProps = {
  islocked?: boolean;
};

const LockProvider: React.FC<LockProviderProps> = ({ islocked, children }) => {
  const [lockStatus, setLockStatus] = React.useState<boolean>(
    islocked || false
  );
  const setIsLocked = (status: boolean) => {
    setLockStatus(status);
  };
  const toggleLock = () => {
    setLockStatus(!lockStatus);
  };
  return (
    <LockContext.Provider
      value={{ islocked: lockStatus, setIsLocked, toggleLock }}
    >
      {children}
    </LockContext.Provider>
  );
};

export default LockProvider;
