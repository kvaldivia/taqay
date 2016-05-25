(function() {
  var UnpairedTag = require('./contracts/unpaired-tag.js'),
      implement = require('../utils/utils.js');

  var CommentTag = (function(contracts) {
    function CommentTag() {
      this._kind = "comment";
      this._data = {};
      this._children = this._data;
    }
    
    implement(CommentTag, contracts);

    return CommentTag;
  })([UnpairedTag]);

  exports = CommentTag;
})();
