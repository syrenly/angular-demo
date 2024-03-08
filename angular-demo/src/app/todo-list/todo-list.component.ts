import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ITodoModel } from "./todo-types";

@Component({
	selector: "app-todo-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent {
	todos: ITodoModel[] = [
		{ id: 1, title: "Todo 1", completed: true },
		{ id: 2, title: "Todo 2", completed: false },
		{ id: 3, title: "Todo 3", completed: true },
	];

	addTodo(input: HTMLInputElement): void {
		const newTodo: ITodoModel = {
			id: Date.now(),
			title: input.value,
			completed: false,
		};
		this.todos.push(newTodo);
		input.value = "";
	}

	removeTodo(id: number): void {
		const index = this.todos.findIndex((todo): boolean => todo.id === id);
		this.todos.splice(index, 1);
	}

	toggleTodo(id: number): void {
		const index = this.todos.findIndex((todo): boolean => todo.id === id);
		this.todos[index].completed = !this.todos[index].completed;
	}

	saveAll(): void {
		console.log(this.todos);
	}
}
