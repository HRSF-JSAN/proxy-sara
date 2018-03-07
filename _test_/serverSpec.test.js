const request = require('supertest');
const app = require('../proxy.js');

describe('Proxy Server', () => {
  test('/restaurant/:id responds with 200', (done) => {
    request(app)
      .get('/restaurant/164')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  test('/pictures/:id responds with 200', (done) => {
    return request(app)
      .get('/pictures/114')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  test('/title/:id responds with 200', (done) => {
    return request(app)
      .get('/title/115')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  test('/map/:id responds with 200', (done) => {
    return request(app)
      .get('/map/117')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });


  test('/information/:id responds with 200', (done) => {
    return request(app)
      .get('/information/174')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});