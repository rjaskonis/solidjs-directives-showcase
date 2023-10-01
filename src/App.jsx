import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

function App() {
    const [homeOwnerName, setHomeOwnerName] = createSignal("Renne");

    return (
        <div class="h-4">
            <h2 class="text-blue-900 font-bold">Hello from a SolidJS Project!</h2>
            <div class="flex flex-col">
                <label>Whose home is it?</label>
                <input class="grid-rows-1 border w-80" type="text" value={homeOwnerName()} onInput={(e) => setHomeOwnerName(e.target.value)} />
                <A href={`/home/${homeOwnerName()}`}>Go home</A>
                <A href="/store">Go to store showcase</A>
            </div>
        </div>
    );
}

export default App;
