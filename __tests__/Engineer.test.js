const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates engineer object with github username', () => {
    const engineer = new Engineer("name", 5, "person@place.com", "j9210");

    expect(engineer.github).toEqual(expect.any(String));
});

test('return github username as a String', () => {
    const engineer = new Engineer("name", 5, "person@place.com", "j9210");

    expect(engineer.getGithub()).toContain(engineer.github);
});

test("return employee's role as engineer", () => {
    const engineer = new Engineer("name", 5, "person@place.com", "j9210");

    expect(engineer.getRole()).toEqual('Engineer');
})