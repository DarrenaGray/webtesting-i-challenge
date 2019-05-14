const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
	describe('repair() method', () => {
		it('restore items durability to 100', () => {
			const item = { name: 'sword', durability: 0, enhancement: 1 };
			expect(enhancer.repair(item)).toHaveProperty('durability', 100);
		});
	});

	describe('succeed() method', () => {
		it('items enhancement increases by 1', () => {
			const item = {
				name: 'sword',
				durability: 100,
				enhancement: 12
			};
			const enhanceSuccess = enhancer.succeed(item);
			expect(enhanceSuccess.enhancement).toBe(13);
		});

		it('if item enhancement level is 20, enhancement level is not changed', () => {
			const item = {
				name: 'sword',
				durability: 100,
				enhancement: 20
			};
			const enhanceSuccess = enhancer.succeed(item);
			expect(enhanceSuccess.enhancement).toBe(20);
		});
	});

	describe('fail() method', () => {
		it('if items enhancement is less than 15, durability is decreased by 5', () => {
			const item = {
				name: 'sword',
				durability: 100,
				enhancement: 14
			};
			const enhanceFail = enhancer.fail(item);
			expect(enhanceFail.durability).toBe(95);
		});
		it('if items enhancement is 15 or more, the durability of the item is decreased by 10', () => {
			const item = {
				name: 'sword',
				durability: 95,
				enhancement: 17
			};
			const enhanceFail = enhancer.fail(item);
			expect(enhanceFail.durability).toBe(85);
		});
		it('if items enhancement level is greater than 16, enhancement level decreases by 1', () => {
			const item = {
				name: 'sword',
				durability: 95,
				enhancement: 18
			};
			const enhanceFail = enhancer.fail(item);
			expect(enhanceFail.durability).toBe(85);
			expect(enhanceFail.enhancement).toBe(17);
		});
	});
});
