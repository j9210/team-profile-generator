const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const e = new Employee();

    expect(typeof(e)).toBe('object');
});

test('set name using constructor argument', () => {
    const name = "sam";
    const e = new Employee(name);

    expect(e.name).toBe(name);
});

test('set id using constructor argument', () => {
    const id = 4;
    const e = new Employee("name", id);

    expect(e.id).toBe(id);
});

test('set email using constructor argument', () => {
    const email = "person@place.com";
    const e = new Employee("name", 5, email);

    expect(e.email).toBe(email);
});

test('get name', () => {
    const name = "sam";
    const e = new Employee(name);

    expect(e.getName()).toBe(name);
});

test('get id', () => {
    const id = 3;
    const e = new Employee("name", id);

    expect(e.getId()).toBe(id);
});

test('get email', () => {
    const email = "random@random.net";
    const e = new Employee("name", 5, email);

    expect(e.getEmail()).toBe(email);
});

test('get role', () => {
    const role = 'Employee';
    const e = new Employee("name", 5, "j@g.c");

    expect(e.getRole()).toBe(role);
});

