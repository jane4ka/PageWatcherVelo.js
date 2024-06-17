const reqOptions = {
    hostname: 'https://stradarace.ru/',
    port: 443,
    path: '/%D0%B2%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE%D0%BD%D0%BA%D0%B0',
    method: 'GET'
};
const domSelector = '.table-price';

module.exports = { reqOptions, domSelector };
