const accountResolver = require('./account_resolver');
const transactionResolver = require('./transaction_resolver');
const authResolver = require('./auth_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(accountResolver, transactionResolver, authResolver);
const resolvers = lodash.merge(authResolver);
module.exports = resolvers;