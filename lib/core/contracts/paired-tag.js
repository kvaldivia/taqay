(function () {
  "use strict";
  var tag = require('./tag.js'),
      unpairedTag = require('./unpaired-tag.js'),
      utils = require('../../utils/utils.js');

  var PairedTag = {
    wrapUnpairedTag: function(unpairedTag) { },
    appendChildren: function(childrenObject) { },
    appendData: function(dataObject) { }
  };

  utils.extend(PairedTag, tag);

  exports.PairedTag = Object.create(PairedTag);
})();
