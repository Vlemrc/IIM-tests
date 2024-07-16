const request = require('supertest');
const app = require('../api/index');

// Mock initial des données pour les tests
let initialBooks = [
 { id: 1, title: 'Book A', author: 'Author A' },
 { id: 2, title: 'Book B', author: 'Author B' }
];

beforeEach(() => {
 // Réinitialiser les données avant chaque test
 initialBooks = [
 { id: 1, title: 'Book A', author: 'Author A' },
 { id: 2, title: 'Book B', author: 'Author B' }
 ];
});

test('GET /books retourne une liste de livres', async () =>
{
 const response = await request(app).get('/books');
 expect(response.status).toBe(200);
 expect(response.body.length).toBe(initialBooks.length);
});

test('POST /books ajoute un nouveau livre', async () => {
 const newBook = { id: 3, title: 'Book C', author: 'Author C' };
 const response = await request(app)
 .post('/books')
 .send(newBook);
 expect(response.status).toBe(201);
 expect(response.body).toMatchObject(newBook);
});

test('PUT /books/:id met à jour un livre existant', async () => {
 const updatedBook = { title: 'New Title' };
 const response = await request(app)
 .put('/books/1')
 .send(updatedBook);
 expect(response.status).toBe(200);
 expect(response.body.title).toBe(updatedBook.title);
});

test('DELETE /books/:id supprime un livre', async () => {
    const bookIdToDelete = 2;
    const response = await request(app).delete(`/books/${bookIdToDelete}`);
    expect(response.status).toBe(204);
    // Vérifie que le livre a été supprimé en vérifiant la liste mise à jour
    const booksAfterDeletion = await request(app).get('/books');
    expect(booksAfterDeletion.body.length).toBe(initialBooks.length - 1);
});