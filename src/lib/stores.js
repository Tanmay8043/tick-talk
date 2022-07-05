import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const selected = writable(browser ? JSON.parse(sessionStorage.getItem("selected") ||JSON.stringify("Home")):"Loading...");
selected.subscribe((val)=> browser && (sessionStorage.selected=JSON.stringify(val)));