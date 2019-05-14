module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	let { enhancement } = item;
	if (enhancement < 20) {
		enhancement += 1;
	} else if ((enhancement = 20)) {
		null;
	}
	return { ...item, enhancement };
}

function fail(item) {
	return { ...item };
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}
