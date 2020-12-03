const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('name', 4, 'person@place.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("returns employee's name as a String" , () => {
    const employee = new Employee('name', 4, 'person@place.com');

    expect(employee.getName()).toContain(employee.name);
});

test("returns employee's id as a Number", () => {
    const employee = new Employee('name', '4', 'person@place.com');

    expect(employee.getId()).toContain(employee.id);
});

test("returns employee's email as a String", () => {
    const employee = new Employee('name', 4, 'person@place.com');

    expect(employee.getEmail()).toContain(employee.email);
});

test("returns employee's role as a String", () => {
    const employee = new Employee('name', 4, 'person@place.com');

    expect(employee.getRole()).toContain('Employee');
});

