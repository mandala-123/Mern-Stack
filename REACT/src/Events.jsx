import { useState } from "react";

function Events() {
    const [light, setLight] = useState(false);

    function press(e) {
        alert("Key pressed: " + e.key);
    }

    function focused() {
        alert("Input focused");
    }

    function blurred() {
        alert("Input lost focus");
    }

    return (
        <>
            <button onMouseOver={() => alert("Mouse Came.")}>
                Jerry
            </button>

            <button onMouseOver={() => alert("Mouse Came.")}>
                Tom
            </button>

            <input
                onFocus={() => console.log("focused")}
                onBlur={() => console.log("blurred")}
            />

            <br />

            <button onClick={() => setLight(!light)}>
                {light ? "Turn OFF Light" : "Turn ON Light"}
            </button>

            <h2>
                {light ? "💡 Light is ON" : "⚫ Light is OFF"}
            </h2>

            <div
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    backgroundColor: light ? "Red" : "White",
                    border: "2px solid black",
                }}
            ></div>
        </>
    );
}

export default Events;