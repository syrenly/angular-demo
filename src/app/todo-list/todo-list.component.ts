import { CommonModule } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	Signal,
	WritableSignal,
	computed,
	effect,
	signal,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IconComponent } from "../icon/icon.component";
import { decrement, increment } from "./todo-list.actions";
import { ITodoModel, StoreType } from "./todo-types";

@Component({
	selector: "app-todo-list",
	standalone: true,
	imports: [CommonModule, IconComponent],
	providers: [],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
	/** List of todos */
	todos: WritableSignal<ITodoModel[]> = signal<ITodoModel[]>([]);
	/** number of item to be done */
	undoneCount: Signal<number> = computed((): number => (this.todos().filter(t => !t.completed) || []).length);
	/** number of item done */
	doneCount: Signal<number> = computed((): number => (this.todos().filter(t => t.completed) || []).length);
	/** message to show how many items are left */
	info = "";
	countTodos$!: Observable<number>;

	constructor(private readonly store: Store<StoreType>) {
		this.countTodos$ = this.store.select("count");
		effect((): void => {
			this.info = `${this.undoneCount() || 0} tasks left`;
		});
	}
	ngOnInit(): void {
		this.todos.set([
			{ id: 1, title: "Todo 1", completed: true },
			{ id: 2, title: "Todo 2", completed: false },
			{ id: 3, title: "Todo 3", completed: true },
		]);
		this.info = `${this.undoneCount() || 0} tasks left`;
	}
	/**
	 * Method to add a new todo
	 * @param input the html element that contains the name of todo. Once the todo is added, the input will be cleared
	 */
	addTodo(input: HTMLInputElement): void {
		// do not add empty strings
		if (!input.value || !input.value.trim()) return;
		const newTodo: ITodoModel = {
			id: Date.now(),
			title: input.value,
			completed: false,
		};
		this.todos.update((todos: ITodoModel[]): ITodoModel[] => [...todos, newTodo]);
		input.value = "";
		this.store.dispatch(increment());
	}
	/**
	 * Method to remove a todo using its id
	 * @param id f the todo
	 */
	removeTodo(id: number): void {
		this.todos.update((todos: ITodoModel[]): ITodoModel[] => todos.filter((todo): boolean => todo.id !== id));
		this.store.dispatch(decrement());
	}
	/**
	 * Method to switch the todo from positive to negative state and vice versa
	 * @param id f the todo
	 */
	toggleTodo(id: number): void {
		this.todos.update((todos: ITodoModel[]): ITodoModel[] =>
			todos.map(
				(todo: ITodoModel): ITodoModel => (todo.id === id ? { ...todo, completed: !todo.completed } : todo),
			),
		);
	}
	/** Show the todos in the console */
	resetAll(): void {
		this.todos.update((todos: ITodoModel[]): ITodoModel[] =>
			todos.map((todo: ITodoModel): ITodoModel => {
				todo.completed = false;
				return todo;
			}),
		);
	}
}
