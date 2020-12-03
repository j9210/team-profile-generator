const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('set github username', () => {
    const git = "random";
    const e = new Engineer("name", 5, "random", git);

    expect(e.github).toBe(git);
})