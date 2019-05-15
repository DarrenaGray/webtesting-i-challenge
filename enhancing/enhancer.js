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
	let { enhancement, durability } = item;
	if (enhancement < 15) {
		durability -= 5;
	} else if (15 <= enhancement && 16 < enhancement) {
		durability -= 10;
		enhancement -= 1;
	}
	return { ...item, enhancement, durability };
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}
