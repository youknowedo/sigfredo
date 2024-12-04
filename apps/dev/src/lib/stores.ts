import { writable } from 'svelte/store';

export const lang = writable<'en' | 'sv' | undefined>(undefined);
