const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const Member = require('../../src/models/member');

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/boutique_test', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

test('should register a member and save to database', async () => {
    const response = await request(app).post('/api/register').send({
        lastName: 'Doe',
        firstName: 'John',
        email: 'john.doe@example.com',
        password: 'password123'
    });
    expect(response.statusCode).toBe(200);
    
    const member = await Member.findOne({ email: 'john.doe@example.com' });
    expect(member).not.toBeNull();
    expect(member.lastName).toBe('Doe');
});
