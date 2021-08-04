let headers = new Headers();
let url = 'https://sias.alcriservicio.com';
// let url = 'http://localhost:8000';

headers.append('Authorization', 'Basic ' + Buffer.from('alcri:Au14785236').toString('base64'));
headers.append('Content-Type', 'application/json');

export {headers, url};