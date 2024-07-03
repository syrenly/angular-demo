import { createAction } from "@ngrx/store";

const source: string = "Todo List";

export const increment = createAction(`[${source}] Count Increment`);
export const decrement = createAction(`[${source}] Count Decrement`);
export const reset = createAction(`[${source}] Count Reset`);
