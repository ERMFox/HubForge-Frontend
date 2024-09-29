// store.js
import { writable } from 'svelte/store';

export var activeItem = writable(''); // Store for the selected item
export var activeProject = writable('');