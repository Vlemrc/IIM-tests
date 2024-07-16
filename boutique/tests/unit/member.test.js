const { validateMember } = require('../src/controllers/memberController');

test('should validate member with correct details', () => {
    const validMember = {
        lastName: 'Doe',
        firstName: 'John',
        email: 'john.doe@example.com',
        password: 'password123'
    };
    expect(validateMember(validMember)).toBe(true);
});

test('should invalidate member with missing email', () => {
    const invalidMember = {
        lastName: 'Doe',
        firstName: 'John',
        password: 'password123'
    };
    expect(validateMember(invalidMember)).toBe(false);
});
