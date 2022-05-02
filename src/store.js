import { writable } from "svelte/store";

export let serverUrl = writable("https://hayman42intropapp.herokuapp.com");
export let uid = writable("");
