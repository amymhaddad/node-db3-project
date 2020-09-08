const db = require('../data/dbConfig');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
	addStep
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes')
	.where({ id }).first();
}

function findSteps(schemeId, query) {
	const knexQuery = db('schemes');
	return knexQuery
		.select('schemes.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
		.innerJoin('steps', 'schemes.id', 'steps.scheme_id')
		.where('schemes.id', schemeId)
		.limit(query.limit);
}

function add(scheme) {
	return db('schemes')
	.insert(scheme)
	.then((id) => findById(id[0]));
}

function update(changes, id) {
	return db('schemes')
	.update(changes)
	.where({ id })
	.then((id) => findById(id));
}

function remove(id) {
	return db('schemes')
	.where({ id })
	.del();
}

function addStep(step, scheme_id) {
	return db('steps')
	.insert(step)
	.where({ scheme_id })
	.then((id) => findById(id[0]));
}
