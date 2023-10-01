import model from "./directives/model";
import { createSignal, createResource, For, Show } from "solid-js";
import { A, useParams } from "@solidjs/router";

const fetchPeople = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const response = await fetch("http://127.0.0.1:3001/people");

    return response.json();
};

function Home() {
    const params = useParams();
    const [surname, setSurname] = createSignal("");
    const [people] = createResource(fetchPeople);

    return (
        <>
            <A href="/">Go back to the beginning</A>
            <h4>
                This is {params.name} {surname()}'s home
            </h4>
            <div className="mt-2 grid grid-rows-3 gap-2">
                <label class="grid-rows-2">Enter surname</label>
                <input class="grid-rows-1 border w-80" type="text" use:model={[surname, setSurname]} />
                {/* <input class="grid-rows-1 border w-80" type="text" value={surname()} onInput={(e) => setSurname(e.target.value)} /> */}
            </div>
            <Show when={!people.loading} fallback={() => <h5>Still loading pal...</h5>}>
                <For each={people()}>{(person) => <p>Person fetched: {person.name}</p>}</For>
            </Show>
        </>
    );
}

export default Home;
