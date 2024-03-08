import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ITodoModel } from "./todo-types";

@Component({
	selector: "app-todo-list",
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent {
	/** Icon used to remove todos */
	xIcon = faX;
	/** List of todos */
	todos: ITodoModel[] = [
		{ id: 1, title: "Todo 1", completed: true },
		{ id: 2, title: "Todo 2", completed: false },
		{ id: 3, title: "Todo 3", completed: true },
	];
	/**
	 * Method to add a new todo
	 * @param input the html element that contains the name of todo. Once the todo is added, the input will be cleared
	 */
	addTodo(input: HTMLInputElement): void {
		const newTodo: ITodoModel = {
			id: Date.now(),
			title: input.value,
			completed: false,
		};
		this.todos.push(newTodo);
		input.value = "";
	}
	/**
	 * Method to remove a todo using its id
	 * @param id f the todo
	 */
	removeTodo(id: number): void {
		const index = this.todos.findIndex((todo): boolean => todo.id === id);
		this.todos.splice(index, 1);
	}
	/**
	 * Method to switch the todo from positive to negative state and vice versa
	 * @param id f the todo
	 */
	toggleTodo(id: number): void {
		const index = this.todos.findIndex((todo): boolean => todo.id === id);
		this.todos[index].completed = !this.todos[index].completed;
	}
	/** Show the todos in the console */
	saveAll(): void {
		console.log(this.todos);
	}
}
