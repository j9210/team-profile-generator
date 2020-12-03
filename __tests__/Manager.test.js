const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('set office number', () => {
    const officeNumber = 4;
    const e = new Manager("name", 5, "kdlsa", officeNumber);

    expect(e.officeNumber).toBe(officeNumber);
})

test('get role', () => {
    const role = 'Manager';
    const e = new Manager("name", 4, "asdf", 8);

    expect(e.getRole()).toBe('Manager');
});

test('get office number', () => {
    const office = 4;
    const e = new Manager("name", 4, "asdf", office);

    expect(e.getOffice()).toBe(office);
})