/**
 * A wrapper function for async functions, which catches errors and passes them to error middleware
 * @param {Function} func the async function to be wrapped
 * @returns {Function} the wrapped async function, which catches errors and passes them to error middleware
 */
export default function catchAsync(func) {
	return (req, res, next) => {
		func(req, res).catch(next);
	};
}
