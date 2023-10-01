import { A } from "@solidjs/router";
import model from "./directives/model";

import { createStore } from "solid-js/store";

function Store() {
    const personStore = createStore({
        name: "Renne",
        surname: "Jaskonis",
        fullName: {
            firstName: "Renne",
            lastName: "Jaskonis",
        },
        user: {
            active: true,
        },
    });
    const [person] = personStore;

    return (
        <>
            <h4>Store</h4>
            <A href="/">Back to the beginning</A>
            <div className="mt-10 grid grid-cols-1 gap-6">
                <label class="">Enter person's name</label>
                <input type="text" class="border w-80" use:model={[personStore, "name"]} />
                <input type="checkbox" class="border w-80 cursor-pointer" use:model={[personStore, "user", "active"]} />
                {/* <input name="name" class="border w-80" type="text" use:model={[personStore, "fullName", "firstName"]} /> */}
                <h1>
                    The given name was <span class="text-green-700">{person.fullName.firstName + " " + person.fullName.lastName}</span>
                </h1>
                <p class="w-[600px] p-6 break-words border-4">{JSON.stringify(person)}</p>
            </div>
        </>
    );
}

export default Store;
