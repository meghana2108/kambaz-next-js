import { useState } from "react";

export default function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e : any) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };
    
    return(
        <div id="wd-event-object">
            <h3>Event Object</h3>
            <button onClick={(e) => handleClick(e)} id="wd-event-object-button">
                Display Event on Object
            </button>
            <pre>{JSON.stringify(event,null,2)}</pre>
            <hr/>
        </div>
    );
}