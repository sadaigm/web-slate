import React, { Suspense } from "react";
import "./App.css";
import DataProvider from "./components/DataProvider";
import LockProvider from "./components/LockProvider";
import MainPage from "./components/MainPage";
import SettingProvider from "./components/SettingProvider";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <LockProvider>
          <DataProvider>
            <SettingProvider>
              <MainPage />
            </SettingProvider>
          </DataProvider>
        </LockProvider>
      </Suspense>
    </>
  );
}

export default App;
