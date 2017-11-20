var vows = require('vows');
var assert = require('assert');
var util = require('util');
var remoteapikey = require('passport-remoteapikey');

vows.describe('passport-remoteapikey').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(remoteapikey.version);
    },
    
    'should export BadRequestError': function (x) {
      assert.isFunction(remoteapikey.BadRequestError);
    },
  },
  
}).export(module);
