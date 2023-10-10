const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { Task } = require('../models/models');

class TaskController {
	async create(req, res) {

		try {
			const { title, date } = req.body;

			const token = req.headers.authorization.split(' ')[1];
			const decode = jwt.decode(token)
			const userId = decode.id;

			const task = await Task.create({
				title,
				date,
				userId
			})
			res.json(task)
		} catch (error) {
			res.status(500).json(error)
		}

	}
	async getAll(req, res) {
		try {
			const token = req.headers.authorization.split(' ')[1];
			const decode = jwt.decode(token)
			const userId = decode.id;

			const tasks = await Task.findAll({ where: { userId } })
			return res.json(tasks)
		} catch (error) {
			return res.json(error)
		}

	}
	async update(req, res) {
		try {
			const task = req.body;
			if (!task.id) {
				res.status(400).json({ message: 'Id не указан' })
			}
			const updatedTask = await Task.upsert(task, { where: task.id })
			return res.json({ updatedTask })

		} catch (error) {
			return res.json(error)
		}
	}
	async delete(req, res) {
		try {
			const task = req.body;
			if (!task.id) {
				res.status(400).json({ message: 'Id не указан' })
			}
			const deleteTask = await Task.destroy({ where: { id: task.id } })
			return res.json(deleteTask)
		} catch (error) {
			return res.json(error)
		}
	}
}

module.exports = new TaskController()