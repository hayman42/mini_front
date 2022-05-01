import { writable } from "svelte/store";

export let serverUrl = writable("http://localhost:5000");
