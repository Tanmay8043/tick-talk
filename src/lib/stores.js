import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const selected = writable(browser ? JSON.parse(sessionStorage.getItem("selected") ||JSON.stringify("Home")):"Loading...");
selected.subscribe((val)=> browser && (sessionStorage.selected=JSON.stringify(val)));

export const userStore = writable(browser ? JSON.parse(localStorage.getItem("userStore") ||JSON.stringify({})):{});
userStore.subscribe((val)=> browser && (localStorage.userStore=JSON.stringify(val)));

export const modalStore = writable(false);
