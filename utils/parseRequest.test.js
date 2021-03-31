const parseRequest = require('./parseRequest')

describe('tests parse request function', () => {

    it('should return the correct object when request has no body', () => {
        const rawRequest = `GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr`;
    const request = parseRequest(rawRequest);

    expect(request).toEqual({
        method: 'GET',
        path: '/'
    });


    });
    it('should return the correct object when request has a body', () => {
        const rawRequest = `GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr\r
\r
This is the body`;
    const request = parseRequest(rawRequest);

    expect(request).toEqual({
        method: 'GET',
        path: '/',
        body: "This is the body"
    });


    });


})