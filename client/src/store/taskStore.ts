import { makeAutoObservable } from 'mobx';

export default class taskStore{
	_tasks = [
		{id:1, title: "task 1", data: "2023-10-10", isChecked: false},
		{id:2, title: "task 2", data: "2023-10-11", isChecked: false},
		{id:3, title: "task 3", data: "2023-10-09", isChecked: false}
	]
	constructor(){
		makeAutoObservable(this)
	}
	setTasks(tasks){
		this._tasks = tasks
	}
	get tasks (){
		return this._tasks
	}
}