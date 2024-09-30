import { effect, signal, useSignalEffect } from '@preact/signals-react';

export default function CounterWithSignal() {
    console.log("Render Signal")

    const countSignal = signal<number>(0); // Signal wird initialisiert

    effect(() => {
        console.log("Signal Value Changed:", countSignal.value);
    });

    return (
        <div>
            <h2>Signals Counter</h2>
            <p>You clicked {countSignal} times</p>
            <button onClick={() => countSignal.value++}>Klicken</button>
        </div>
    );
}