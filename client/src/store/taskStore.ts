import { TaskProps } from '@/components/interface';
import { makeAutoObservable } from 'mobx';

export default class taskStore {
	_tasks = [
		{ id: 1, title: "task 1", date: "2023-10-10", isChecked: false },
		{ id: 2, title: "task 2", date: "2023-10-11", isChecked: false },
		{ id: 3, title: "task 3", date: "2023-10-09", isChecked: false }
	]
	constructor() {
		makeAutoObservable(this)
	}
	setTasks(tasks: TaskProps[]) {
		this._tasks = tasks
	}
	addTask(task: TaskProps) {
		this._tasks.push(task)
	}
	removeTask(id: number) {
		this._tasks = this._tasks.filter(task => task.id == id)
	}
	completeTask(id: number) {
		this._tasks = this._tasks.map(task => task.id === id ? { ...task, isChecked: !task.isChecked } : task)
	}
	get tasks() {
		return this._tasks
	}
}