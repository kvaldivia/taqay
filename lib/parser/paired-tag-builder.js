(function() {
  var PairedTag = require('../core/paired-node-tag.js'),
      implement = require('../utils/utils.js').implement;

  var PairedTagBuilder = (function(contracts) {
    function PairedTagBuilder(context) {
      this._context = context;
      this._switches = (function(context) {
        return [
          {
            character: "[A-Za-z]", rule: new RegExp(this.character),
            action: (function(context) { 
              context.kindBuilding();
            })(context)
          },

        ];
      })(context);
      
    }

    implement(PairedTagBuilder, contracts);

    PairedTagBuilder.prototype.build = function(position) {
      this._string = this._context.getString();
      this._position = position;
      while(this._position < this._string.length) {

      }
      return this._position;
    };
  })([state]);
})();
