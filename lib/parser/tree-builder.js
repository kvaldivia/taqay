(function() {
  var treeFactory = require('../core/contracts/tree.js'),
      context = require('./contracts/builder-context.js'),
      utils = require('../utils/utils.js'),
      extend = utils.extend;
  
  var TreeBuilder = (function(contracts) {
    function TreeBuilder(parser) {
      this._parser = parser;
      this._tagStack = [];
      this._stateStack = [];
      this._tagTree = treeFactory.createTree();
      this._states = {
        dataBuilding: new DataBuilder(),
        commentBuilding: new CommentBuilder(),
        unpairedTagBuilding: new UnpairedTagBuilder(),
        pairedTagBuilding: new PairedTagBuilder(),
        kindBuilding: new KindBuilder(),
        textBuilding: new TextBuilder(),
        attributeBuilding: new AttributeBuilder()
      };
    }

    extend(TreeBuilder, contracts);

    TreeBuilder.prototype.run = function() {
      var position = 0;
      var htmlString = this._parser.getHtmlString();
      while (position < htmlString.length) {
        position = this._tagStack.pop.build(position, htmlString);
      }
    };

    TreeBuilder.prototype.pushState = function(state) {
      this._states.push(state);
    };

    TreeBuilder.prototype.popState = function() {
      return this._states.pop();
    };

    TreeBuilder.prototype.getParser = function() {
      return this._parser;
    };

    TreeBuilder.prototype.pushTag = function(tag) {
      this._tagStack.push(tag);
    };

    TreeBuilder.prototype.popTag = function() {
      return this._tagStack.pop();
    };

    TreeBuilder.prototype.dataBuilding = function() {
      this.pushState(this._states.dataBuilding);
    };

    TreeBuilder.prototype.commentBuilding = function() {
      this.pushState(this._states.commentBuilding);
    };

    TreeBuilder.prototype.unpairedTagBuilding = function() {
      this.pushState(this._states.unpairedTagBuilding);
    };

    TreeBuilder.prototype.pairedTagBuilding = function() {
      this.pushState(this._states.pairedTagBuilding);
    };

    TreeBuilder.prototype.kindBuilding = function() {
      this.pushState(this._states._kindBuilding);
    };

    TreeBuilder.prototype.textBuilding = function() {
      this.pushState(this._states.textBuilding);
    };

    TreeBuilder.prototype.attributeBuilding = function() {
      this.pushState(this._states.textBuilding);
    };

    return TreeBuilder;
  })([context]);

  exports.createTreeBuilder = function(parser) {
    return new TreeBuilder(parser);
  };
})();
