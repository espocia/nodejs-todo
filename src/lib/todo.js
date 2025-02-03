
export default class Todo {
	constructor(args, todos) {
		this.args = args
		this.todos = todos
	}
	displayTodo() {
		this.todos.forEach((todo, index) => {
			if (todo.status !== 'hide') {
				console.log(`${!todo.done ? '[ ]' : '[\u{2713}]'}: ${index} ${todo.todo}`);
			};
		});
	}
	updateStatus(index, field, status) {
		this.todos[index][field] = status;
		this.displayTodo();
	};

	init() {
		switch (this.args.length) {
			case 0: {
				this.displayTodo();
				break;
			}
			case 2: {
				const [argument, index] = this.args;
				if (argument == 'done' || argument == 'ongoing') {
					this.updateStatus(index, 'done', argument === 'done');
					file.writeTodo(this.todos);
				}
				if (argument === 'remove') {
					const target = this.todos[index]
					if (target !== undefined && target.status !== 'hide') {
						this.todos[index].status = 'hide';
						this.updateStatus(index, 'status', 'hide');
						file.writeTodo(this.todos);
					} else {
						console.log('Uh-oh invalid argument')
					}
				}
				break;
			}
			case 3: {
				const [argument, todo, status] = this.args;
				if (argument === 'add') {
					this.todos.push({ todo: todo, done: status === 'true', status: 'show' });
					file.writeTodo(this.todos);
					this.displayTodo();
				}
				break;
			}
			default:
				console.log('Oh-uh invalid arguments.');
				break;

		}
	}

}
