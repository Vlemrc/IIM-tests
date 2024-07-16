const { validateMember } = require('../../src/controllers/memberController');

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

test('should invalidate member with missing last name', () => {
    const invalidMember = {
        firstName: 'John',
        email: 'john.doe@example.com',
        password: 'password123'
    };
    expect(validateMember(invalidMember)).toBe(false);
});

test('should invalidate member with missing first name', () => {
    const invalidMember = {
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123'
    };
    expect(validateMember(invalidMember)).toBe(false);
});

test('should invalidate member with missing password', () => {
    const invalidMember = {
        lastName: 'Doe',
        firstName: 'John',
        email: 'john.doe@example.com'
    };
    expect(validateMember(invalidMember)).toBe(false);
});

test('should invalidate member with invalid email format', () => {
    const invalidMember = {
        lastName: 'Doe',
        firstName: 'John',
        email: 'john.doe@invalid',
        password: 'password123'
    };
    expect(validateMember(invalidMember)).toBe(false);
});

test('should invalidate member with empty fields', () => {
    const invalidMember = {
        lastName: '',
        firstName: '',
        email: '',
        password: ''
    };
    expect(validateMember(invalidMember)).toBe(false);
});

test('should invalidate member with short password', () => {
    const invalidMember = {
        lastName: 'Doe',
        firstName: 'John',
        email: 'john.doe@example.com',
        password: '123'
    };
    expect(validateMember(invalidMember)).toBe(false);
});

test('should invalidate member with missing email and password', () => {
    const invalidMember = {
        lastName: 'Doe',
        firstName: 'John'
    };
    expect(validateMember(invalidMember)).toBe(false);
});