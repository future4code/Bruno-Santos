import { GlobalStateContext } from "./GlobalStateContext";
import { useEffect, useState } from "react";

function GlobalState(props) {
    const [tarot, setTarot] = useState([]);

    useEffect(() => {
        getTarotCards();
    }, []);

    const getInfo = () => {
        getTarotCards(setTarot);
    };

    const getTarotCards = () => {
        const url = "tarot.json";

        fetch(url)
            .then((response) => response.json())
            .then((cards) => {
                console.log(cards);
                setTarot(cards);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log("TAROT", tarot);

    const URL_BASE = tarot.imagesUrl;

    const URL_BACK = tarot.imageBackCard;

    const states = { tarot };
    const requests = { getTarotCards, getInfo };

    return (
        <GlobalStateContext.Provider
            value={{ states, requests, URL_BASE, URL_BACK }}
        >
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;
