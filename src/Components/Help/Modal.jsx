import { useEffect } from "react";
import { useState } from "react"
import Form from "../Form";

export default function Modal() {

    const ls = localStorage.getItem('hadOpened');
    const [active, setActive] = useState(false);
    const [hadOpened, setHadOpened] = useState(ls ? ls : false);

    const styles = {
        root: {
            borderRadius: '15px',
            background: 'white',
            color: 'black',
            boxShadow: '-12px 12px 8px 0px rgba(34, 60, 80, 0.3)'
        },
        colorBLK: { color: 'black' },
        modalWidth: { width: "95%" }
    }


    useEffect(() => {
        if (!hadOpened) {
            setTimeout(() => {
                setActive(true)
                setHadOpened(true)
                localStorage.setItem('hadOpened', true)
            }, 20000);
        }


    }, [hadOpened])


    const modalHandler = () => {
        setActive(false);
        setHadOpened(true);
    }

    return (
        <>
            <div 
            className={active ? "modal_window active" : "modal_window"} 
            onClick={modalHandler}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <div 
                        className="modal_exit"
                        onClick={modalHandler}
                    >&#10006;</div>

                    <Form styles={styles}/>
                </div>
            </div>

            <div 
            className="modal_toggler pulse"
            onClick={() => setActive(true)}>
                <i className="material-icons prefix">question_answer</i>
            </div>
        </>
    )
}