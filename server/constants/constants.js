const {
  NODE_ENV,
  JWT_SECRET = 'secret-key',
  MONGODB_URL = 'mongodb+srv://JetRuby:JetRuby@gittrends.lsctuyi.mongodb.net/',
  PORT = 3000,
} = process.env;

const CREATED_CODE = 201;
const VALIDATION_ERROR_CODE = 400;
const AUTH_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CREATE_USER_ERROR_CODE = 409;
const SERVER_ERROR_CODE = 500;
const DUBLICATE_ERROR_CODE = 11000;
const PATERN_URL =
  /^(https?:\/\/)(www\.)?[a-zA-Z0-9][\w\W]+\.[a-zA-Z]{2,}([./]?)([\w][\w\W]*)?#?$/;

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
};

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  MONGODB_URL,
  PORT,
  PATERN_URL,
  corsOptions,
  CREATED_CODE,
  VALIDATION_ERROR_CODE,
  AUTH_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CREATE_USER_ERROR_CODE,
  SERVER_ERROR_CODE,
  DUBLICATE_ERROR_CODE,
};
