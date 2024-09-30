import React, { useState } from "react";

export default function CounterWithState() {
    console.log("Render State")

    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2>useState Counter</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Klicken</button>
        </div>
    );
}