var afterCreateUserHook = null;

Accounts.afterCreateUser = function(func) {
  if (afterCreateUserHook) {
    throw new Error("Can only call afterCreateUser once");
  } else {
    return afterCreateUserHook = func;
  }
};

var oldCreateUser = Meteor.server.method_handlers.createUser;
delete Meteor.server.method_handlers.createUser;

Meteor.methods({
  "createUser": function(options) {
    var loginToken = oldCreateUser.call(this, options);
    if (afterCreateUserHook) {
      afterCreateUserHook(loginToken.id);
    }
    return loginToken;
  }
});
