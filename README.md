accounts-password-hook
===============================

Provides an Accounts hook for a callback to be invoke after a user has been created.


Usage
---------------------------

```js
// only on the server
Accounts.afterCreateUser(function(userId){
  Log.debug('A new user was created with Id:' + userId);
});
```
