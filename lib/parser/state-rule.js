(function() {
  var StateRule = (function() {
    function StateRule(ruleString, actionFunction) {
      this._rule = new RegExp(ruleString, "g");
      this.action = actionFunction;
    }

    return StateRule;
  })();

  exports.createRule = function(ruleString, actionFunction) {
    return new StateRule(ruleString, actionFunction);
  };
})();
