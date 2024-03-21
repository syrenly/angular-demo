import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TodoListComponent } from "./todo-list.component";

describe("TodoListComponent", (): void => {
	let component: TodoListComponent;
	let fixture: ComponentFixture<TodoListComponent>;

	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [TodoListComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TodoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", (): void => {
		expect(component).toBeTruthy();
	});
});
