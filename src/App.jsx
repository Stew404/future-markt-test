import React from "react";
import styles from "./App.module.scss";
import Header from "./Header";
import Main from "./Main";
import CallForm from "./CallForm";
import { useEffect, useState } from "react";

export const callformContext = React.createContext(null);

function App() {
    const [isCallFormOpen, setIsCallFormOpen] = useState(false);

    return (
        <>
            <callformContext.Provider
                value={{
                    isCallFormOpen: isCallFormOpen,
                    setIsCallFormOpen: setIsCallFormOpen,
                }}
            >
                <div className={styles.bg}></div>
                <Header />
                <Main />
                <CallForm />
            </callformContext.Provider>
        </>
    );
}

export default App;
