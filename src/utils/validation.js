import isEmail from 'validator/lib/isEmail'

function validateSubscribe(values) {
	let errors = {}

	if (!isEmail(values.email)) {
		errors.email = true
	}

	if (!values.name || values.name.length < 1) {
		errors.name = true
	}

	return errors
}

export { validateSubscribe }
