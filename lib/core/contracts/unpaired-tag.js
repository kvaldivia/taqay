(function() {
  "use strict";
  var utils = require('../../utils/utils.js'),
      tag = require('./tag.js'),
      implement = utils.implement;

  var UnpairedTag = {
    addAttributes: function(attributeObject) { }
  };

  extend(UnpairedTag, tag);
  
  exports.UnpairedTag = Object.create(UnpairedTag);
})();
