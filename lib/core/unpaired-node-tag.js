(function() {
  var UnpairedTag = require('./contracts/unpaired-tag.js'),
      implement = require('../utils/utils.js').implement;

  var UnpairedNodeTag = (function() {
    function UnpairedNodeTag(kind) {
      this._kind = kind;
      this._attributes = {};
    }

    implement(UnpairedNodeTag, UnpairedTag);

    UnpairedNodeTag.prototype.queryAttributes = function(attributeObject) {
      for (var att in attributeObject) {
        if (this._attributes[att] !== attributeObject[att]) {
          return false;
        }
      }
      return true;
    };
  })();
})();
