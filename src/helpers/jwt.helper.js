const jwt = require("jsonwebtoken");

const createAccessJWT = (payload) => {
  // JWT_ACCESS_SECRET
  const accessJWT = jwt.sign({ payload }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
  return Promise.resolve(accessJWT);
};
const createRefreshJWT = (payload) => {
  // JWT_REFRESH_SECRET
  const refreshJWT = jwt.sign({ payload }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "10d",
  });
  return Promise.resolve(refreshJWT);
};

module.exports = {
  createAccessJWT,
  createRefreshJWT,
};
