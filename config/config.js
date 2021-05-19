const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_parkHere',
    password: env.DB_PASSWORD || '123456',
    database: env.DB_NAME || 'freedbtech_parkHere',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;