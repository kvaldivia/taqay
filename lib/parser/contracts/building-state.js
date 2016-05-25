(function() {
  var State = {
    build: function() {
      console.log("This is State.build contract...");
    },

    triggerTo: function(element, index, array) {
      var offset = 3;
      var result = element.rule.exec(this._string.substr(this._position, offset));
      if (result) {
        element.action();
      }
    }
  };

  exports = Object.create(State);
})();
