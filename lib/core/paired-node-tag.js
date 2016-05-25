(function() {
  var PairedTag = require('./contracts/paired-tag.js'),
      implement = require('../utils/utils.js');

  var PairedNodeTag = (function(contracts) {
    function PairedTag() {
      this._kind = null;
      this._children = {};
      this._data = {};
    }

    implement(PairedNodeTag, PairedTag);

    return PairedNodeTag;
  })([PairedTag]);
})();
