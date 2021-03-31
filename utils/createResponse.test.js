const createResponse = require('./createResponse');

describe('tests create response function', () => {
    it('should generate a response in the correct format when given an object ', () => {
        const response = createResponse({
            body: '<h1>hi there</h1>',
            status: '200 OK',
            contentType: 'text/html'
        });
        const expectation = `HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 17
Content-Type: text/html\r
\r
<h1>hi there</h1>`
        expect(response).toEqual(expectation);
    })
})