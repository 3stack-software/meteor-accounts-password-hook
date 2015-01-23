
var afterCreateUserHook = null;

Accounts.afterCreateUser = function(func) {
  if (afterCreateUserHook) {
    throw new Error("Can only call afterCreateUser once");
  } else {
    return afterCreateUserHook = func;
  }
};

Meteor.methods({
  createUserWithHook: function(options) {
    var loginToken;
    loginToken = Meteor.call('createUser', options);
    if (afterCreateUserHook) {
      afterCreateUserHook(loginToken.id);
    }
    return loginToken;
  }
});
