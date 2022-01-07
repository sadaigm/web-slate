import React from "react";
import { SlateDataContext, SlatePattern } from "./context";

type DataProviderProps = {
  guid?: string;
};

const DataProvider: React.FC<DataProviderProps> = ({ guid, children }) => {
  const [data, setData] = React.useState([] as Array<SlatePattern>);
  const [loadDataFlag, setLoadDataFlag] = React.useState<boolean>(false);

  const toggleRender = () => {
    setLoadDataFlag(!loadDataFlag);
  };

  React.useEffect(() => {
    // getdata using guid
    setData([] as Array<SlatePattern>);
  }, [guid]);

  const loadData = (slatePattern: SlatePattern) => {
    setData([...data, slatePattern]);
  };
  return (
    <SlateDataContext.Provider
      value={{
        slatePattern: data,
        loadData,
        renderData: loadDataFlag,
        toggleRender,
      }}
    >
      {children}
    </SlateDataContext.Provider>
  );
};

export default DataProvider;
