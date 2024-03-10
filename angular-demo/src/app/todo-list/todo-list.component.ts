import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, Signal, WritableSignal, computed, signal } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { ITodoModel } from "./todo-types";
// Hint: save todos in browser storage
@Component({
	selector: "app-todo-list",
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
	/** List of todos */
	todos: WritableSignal<ITodoModel[]> = signal<ITodoModel[]>([
		{ id: 1, title: "Todo 1", completed: true },
		{ id: 2, title: "Todo 2", completed: false },
		{ id: 3, title: "Todo 3", completed: true },
	]);
	undoneCount: Signal<number> = computed((): number => (this.todos().filter(t => !t.completed) || []).length);
	doneCount: Signal<number> = computed((): number => (this.todos().filter(t => t.completed) || []).length);

	ngOnInit(): void {}
	/**
	 * Method to add a new todo
	 * @param input the html element that contains the name of todo. Once the todo is added, the input will be cleared
	 */
	addTodo(input: HTMLInputElement): void {
		// do not add empty strings
		if (!input.value || !input.value.trim()) return;
		// Hint: implement reactive form to make a better check with error messages
		const newTodo: ITodoModel = {
			id: Date.now(),
			title: input.value,
			completed: false,
		};
		this.todos.update((todos: ITodoModel[]): ITodoModel[] => [...todos, newTodo]);
		input.value = "";
	}
	/**
	 * Method to remove a todo using its id
	 * @param id f the todo
	 */
	removeTodo(id: number): void {
		this.todos.update((todos: ITodoModel[]): ITodoModel[] => todos.filter((todo): boolean => todo.id !== id));
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
	saveAll(): void {
		console.log(this.todos);
	}
}
