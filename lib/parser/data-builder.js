(function() {
  var state = require('./contracts/building-state.js'),
      utils = require('../utils/utils.js'),
      ruleFactory = require('./state-rule.js'),
      extend = utils.extend;

  var DataBuilder = (function() {
    function DataBuilder(context, switches) {
      this._context = context;
      this._switches = [
        ruleFactory.createRule("<", context.unpairedTagBuilding)
      ];
    }

    extend(DataBuilder, state);

    DataBuilder.prototype.build = function(position) {
      var string = this._context.getParser().getString();
      var data = "";
      var dataString = "";

      while (position < string.length && this._context.state == this) {
        this._switches.forEach(this.isIncludedInString, this._context);
        dataString = dataString + string[position];
        position++;
      }

      return position;
    };
      
    return DataBuilder;
  })();

  exports.createDataBuilder = function(parser) {
    return new DataBuilder(parser);
  };
})();
