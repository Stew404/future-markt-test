import { useContext } from "react";
import styles from "./Main.module.scss";
import Promo from "./Promo";
import Stats from "./Stats";
import { callformContext } from "./App";

export default function Main() {
    const { isCallFormOpen, setIsCallFormOpen } = useContext(callformContext);

    const mainStyle = isCallFormOpen
        ? `${styles.main} ${styles.main__blur}`
        : styles.main;

    return (
        <main className={mainStyle}>
            <img src="./mentor.png" alt="mentor" />
            <Promo />
            <Stats />
        </main>
    );
}
