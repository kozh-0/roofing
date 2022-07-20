import { useState } from "react"


export default function Modal() {

    const [active, setActive] = useState(true);

    return (
        <div 
        className={active ? "modal_window active" : "modal_window"} 
        onClick={() => setActive(false)}>

            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <h1>Привет</h1>
            </div>
        </div>
    )
}