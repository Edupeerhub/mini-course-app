const jwt = require("jsonwebtoken");

// Generating new Token
const tokenGeneration = (userid) => {
  return (
    jwt.sign(userid),
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Verifying generated Tokens.
const tokenVerification = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

// Exports
module.exports = {
  tokenGeneration,
  tokenVerification,
};
