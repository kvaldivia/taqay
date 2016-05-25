(function() {
  var Parser = {
    buildTree: function() {
      this._treeBuilder.build();
    },
    
    select: function() {
      var tree = this._treeBuilder.getTagTree();

    }
  };

  exports = Object.create(Parser);
})();
