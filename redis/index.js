const redis = require('redis');

const client = redis.createClient('redis://ec2-54-193-71-53.us-west-1.compute.amazonaws.com:6379');

const get = (key, callback) => {
  client.get(key, callback);
};

const setData = (key, value) => {
  const stringVal = JSON.stringify(value);
  client.setex(`${key}`, 60, stringVal);
};

module.exports.get = get;
module.exports.setData = setData;
