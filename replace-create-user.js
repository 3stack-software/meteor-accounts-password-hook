
// Attempt to log in as a new user.
Accounts.createUser = function (options, callback) {
  options = _.clone(options); // we'll be modifying options

  if (typeof options.password !== 'string')
    throw new Error("Must set options.password");
  if (!options.password) {
    callback(new Meteor.Error(400, "Password may not be empty"));
    return;
  }

  // Replace password with the hashed password.
  options.password = Accounts._hashPassword(options.password);

  Accounts.callLoginMethod({
    methodName: 'createUserWithHook',
    methodArguments: [options],
    userCallback: callback
  });
};
