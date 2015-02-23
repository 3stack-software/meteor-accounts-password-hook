Package.describe({
  name: '3stack:accounts-password-hook',
  version: '0.0.2',
  summary: 'Overwrites Accounts.createUser to provide an afterCreateUser hook',
  git: 'https://github.com/3stack-software/meteor-accounts-password-hook',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('accounts-password', 'server');

  api.addFiles('after-create-user-server.js', 'server');
});
