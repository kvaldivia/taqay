(function() {
  var state = require('./contracts/building-state.js'),
      createStateRule = require('./state-rule.js'),
      implement = require('../utils/utils.js');

  function UnpairedTagBuilder(context) {
    this._context = context;
    this._switches = (function(context) {
      return [
        createStateRule("/[A-Za-z]", context.pairedTagBuilding),
        createStateRule("[A-Za-z]", context.kindBuilding),
        createStateRule("!--", context.commentBuilding),
        createStateRule(">", context.popCurrentState)
      ];
    })(context);
  }

  implement(UnpairedTagBuilder, state);

  UnpairedTagBuilder.prototype.build = function(position) {
    this._string = this._context.getParser().getHtmlString();
    this._position = position;
    this._context.pushTag(new UnpairedTag());
    while(this._position < this._string.length && this._context == this) {
      this._switches.forEach(this.triggerTo);
      this._position++;
    }
    return position;
  };

})();
