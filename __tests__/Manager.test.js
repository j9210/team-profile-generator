const Manager = require('../lib/Manager');

test('creates Manager object with office number', () => {
    const manager = new Manager("name", 5, "kdlsa", '444-444-4444');

    expect(manager.officeNumber).toEqual('444-444-4444');
})

test("returns employee's role as manager", () => {
    const manager = new Manager("name", 4, "asdf", 8);

    expect(manager.getRole()).toBe('Manager');
});

test("returns manager's office number", () => {
    const manager = new Manager("name", 4, "asdf", '444-444-4444');

    expect(manager.getOfficeNumber()).toContain(manager.officeNumber);
})