const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('creates intern object with school info', () => {
    const intern = new Intern("name", 5, "person@place.com", "University of Texas");

    expect(intern.school).toEqual(expect.any(String));
});

test('returns school info', () => {
    const intern = new Intern("name", 5, "person@place.com", "University of Texas");

    expect(intern.getSchool()).toContain(intern.school);
});

test("returns employee's role as intern", () => {
    const intern = new Intern("name", 5, "person@place.com", "University of Texas");

    expect(intern.getRole()).toEqual('Intern');
});