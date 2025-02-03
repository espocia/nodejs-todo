#!/usr/bin/env node

import { argv } from 'node:process'
import Todo from './lib/todo.js'
import File from './lib/file.js'

const argument = argv.slice(2);
const filePath = `${import.meta.dirname}/data/data.csv`
const file = new File(filePath);
// Reads current todos before initializing
const infile_todos = await file.readTodo();
// Initialize todo
const todo = new Todo(argument, infile_todos);
todo.init();
