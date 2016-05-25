(function() {
  var Tree = (function() {
    function Tree() {
      this._rootTag = {};
    }

    Tree.prototype.getRootTag = function() {
      return this._rootTag;
    };

    Tree.prototype.setRootTag = function(tagObject) {
      this._rootTag = this._rootTag || tagObject;
    };
  })(); 

  exports.createTree = function() {
    return new Tree();
  };
})();
