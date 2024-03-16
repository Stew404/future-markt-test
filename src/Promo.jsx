import { useContext } from "react";
import styles from "./Promo.module.scss";
import { callformContext } from "./App";

export default function Promo() {
    const { isCallFormOpen, setIsCallFormOpen } = useContext(callformContext);

    return (
        <div className={styles.promo}>
            <h1 className={styles.promo__title}>
                Создаю условия <br /> для вашего успеха
            </h1>
            <p className={styles.promo__subtitle}>
                <span type="normal">
                    Когда ваше время и энергия лучше сфокусированы, стремление к
                    новым возможностям становится реальностью, ваш успех зависит
                    от ваших действий
                </span>
                <span type="mobile">Ваш успех зависит от ваших действий</span>
            </p>
            <div className={styles.promo__buttons}>
                <button className={styles.promo__button_white}>
                    <span type="normal">Записаться на консультацию</span>
                    <span type="mobile">Записаться</span>
                </button>
                <button
                    className={styles.promo__button}
                    onClick={() => {
                        setIsCallFormOpen(true);
                    }}
                >
                    <span type="normal">Бесплатная консультация</span>
                    <span type="mobile">Заказать звонок</span>
                </button>
            </div>
        </div>
    );
}
