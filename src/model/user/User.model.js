// do database queries
const { UserSchema } = require("./User.schema");

// this function stores user database
// call function in userRouter
const InsertUser = (userObj) => {
  return new Promise((resolve, reject) => {
    UserSchema(userObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

module.exports = {
  InsertUser,
};
