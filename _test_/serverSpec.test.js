const request = require('supertest');
const app = require('../proxy.js');

describe('Proxy.js', () => {
  test('/restaurant/:id responds with 200', () => {
   return request(app)
      .get('/restaurant/164')
      .then(res => {
        expect(res.text.length).toBeGreaterThan(200);
      })
  });
  test('/pictures/:id responds with 200', () => {
    return request(app)
      .get('/pictures/114')
      .expect(200);
  });

  test('/title/:id responds with 200', () => {
    return request(app)
      .get('/title/115')
      .expect(200);
  });

  test('/title/:id responds with 200', () => {
    return request(app)
      .get('/title/115')
      .expect(200);
  });

  test('handles post requests to title component', () => {
    return request(app).post('/').send({ type: 'Italian', id: '123' })
      .set('contentType', 'multipart/form-data')
      .expect(201);
  });

  test('/map/:id responds with 200', () => {
    return request(app)
      .get('/map/117')
      .expect(200);
  });


  test('/information/:id responds with 200', () => {
    return request(app)
      .get('/information/174')
      .expect(200)
  });
});