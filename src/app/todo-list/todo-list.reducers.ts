import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./todo-list.actions";

const initialState: number = 0;

export const counterReducer = createReducer(
	initialState,
	on(increment, (state: number): number => state + 1),
	on(decrement, (state: number): number => state - 1),
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	on(reset, (state: number): number => initialState),
);
