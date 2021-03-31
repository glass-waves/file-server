module.exports = rawRequest => {
    // console.log('raw request', rawRequest.toString())
    const [header, body] = rawRequest.toString().split('\r\n\r\n');
    const [method, path] = header.split(' ');
    return {
        method: method,
        path: path,
        body: body
    }
};