"use strict";



var Client = require("./client");
var errorUtil = require("./utils/error");


function createClient(options)
{
  return new Client(options);
}


module.exports = {
  createClient: createClient,

  errorTypes: errorUtil.types
};
