const app = require('./app');
const {port, host } = require('./config');

app.listen(process.env.PORT || port, host, () => console.log(`Сервер запущен на  ${ host }:${ port }`))



