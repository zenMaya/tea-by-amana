import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import { teas, Tea, TeaType, TeaTag } from './Tea';

class TeaStore {
  constructor(
    public tag_filter: Writable<TeaTag> = writable(new TeaTag()),
    public type_filter: Writable<TeaType> = writable(TeaType.All),
    public selected_tea: Writable<Tea> = writable(teas[0]),
    public main_element: Writable<HTMLElement> = writable(null),
  ) { }
}

export const tea_store = new TeaStore();
