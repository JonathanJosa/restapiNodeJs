require('dotenv').config();

const server = require('./server');

const port = process.env.PORT || 8133;

server.listen(port, () => console.log(`Server is live on ${port}`));
