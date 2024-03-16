import { useEffect } from "react";
import styles from "./Stats.module.scss";
import { useState } from "react";

const getFirstStat = () => {
    const date = new Date();

    const strDate = `${date.getDate()}${
        date.getMonth() + 1
    }${date.getFullYear()}`;

    return strDate.split("").reduce((acc, value) => {
        return acc + parseInt(value);
    }, 0);
};

export default function Stats() {
    const firstStat = getFirstStat();

    const [secondStat, setSecondStat] = useState("");

    const statsData = [
        {
            titleText: `${firstStat}+`,
            subtitleTextNormal: "техник для достижения целей",
            subtitleTextMobile: "техники",
        },
        {
            titleText: `${secondStat}%`,
            subtitleTextNormal: "увеличение личной продуктивности",
            subtitleTextMobile: "продуктивности",
        },
    ];

    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSecondStat(Math.floor(res.Valute.GBP.Value));
            });
    }, []);

    return (
        <div className={styles.stats}>
            {statsData.map((stat, index) => {
                return (
                    <div className={styles.stat} key={`stat-${index}`}>
                        <p className={styles.stat__title}>{stat.titleText}</p>
                        <p className={styles.stat__subtitle}>
                            <span type="normal">{stat.subtitleTextNormal}</span>
                            <span type="mobile">{stat.subtitleTextMobile}</span>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
