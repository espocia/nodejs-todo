import fs from 'node:fs/promises'
export default class File {
	constructor(file) {
		this.file = file;
	}

	async readTodo() {
		try {
			const data = await fs.readFile(this.file, "utf-8");
			const entries = data.split('\n').filter((enty) => enty.trim() !== '').map((entry) => {
				const [todo, done, status] = entry.split(',');
				const obj = { todo: todo, done: done === 'true' ? true : false, status: status };
				return obj;
			})
			return entries.slice(1);

		} catch (err) {
			console.log(err);
			return null;
		};
	};

	async writeTodo(todo) {
		try {
			let arrayToString = "todo,done,status\n";
			const parsedString = todo.map((entry) => {
				return `${entry.todo},${entry.done},${entry.status}\n`;
			});
			parsedString.forEach((entry) => { arrayToString += entry });

			await fs.writeFile(this.file, arrayToString);

		} catch (err) {
			cosole.log(err);
		};
	};
};
