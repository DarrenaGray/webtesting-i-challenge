const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
	describe('repair() method', () => {
		it('restore items durability to 100', () => {
			const items = { name: 'sword', durability: 100, enhancement: +1 };
			expect(enhancer.repair(items)).toHaveProperty('durability', 100);
		});
	});
});
