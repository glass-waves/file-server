const request = require('supertest');
const app = require('../app');

describe('endpoint test', () => {
  it('should serve an html file when index.html path is accessed', async () => {
    const result = await request(app).get('/file/index.html');
    const expectation = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>It is working</h1>
  </body>
</html>`;
expect(result.text).toEqual(expect.stringContaining(expectation));
  });
});
