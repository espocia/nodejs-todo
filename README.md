
# To-Do CLI App

A simple command-line To-Do application built with Node.js that allows users to add, mark as done, mark as ongoing, remove, and view tasks stored in a CSV file.

## Usage

### Add a Task
```sh
npm run todo add "<task_name>" <status>
```
- `<task_name>`: Description of the task.
- `<status>`: `true` (done) or `false` (ongoing).

**Example:**
```sh
npm run todo add "Make fried chicken" false
```

### Mark a Task as Done
```sh
npm run todo done <task_index>
```
- `<task_index>`: Index of the task in the list.

**Example:**
```sh
npm run todo done 0
```

### Mark a Task as Ongoing
```sh
npm run todo ongoing <task_index>
```
**Example:**
```sh
npm run todo ongoing 1
```

### Remove a Task
```sh
npm run todo remove <task_index>
```
**Example:**
```sh
npm run todo remove 3
```

### Show To-Do List
```sh
npm run todo
```

### View Raw Data
```sh
cat data.csv
```

## Development Workflow

### Creating a New Feature Branch
```sh
git checkout -b feature/add-todo
git add --all
git commit -m "add: write to data.csv function"
git push -u origin feature/add-todo
```

### Merging a Feature Branch into `main`
```sh
git checkout main
git rebase feature/add-todo
```

