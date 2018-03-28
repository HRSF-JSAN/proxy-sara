const redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const get = (key, callback) => {
  client.get(key, callback);
};

// const setBundle = (key, value) => {
//   const stringVal = JSON.stringify(value);
//   client.setex(`${key}`, 86400, stringVal);
// };

const setData = (key, value) => {
  const stringVal = JSON.stringify(value);
  client.setex(`${key}`, 60, stringVal);
};

module.exports.get = get;
// module.exports.setBundle = setBundle;
module.exports.setData = setData;
