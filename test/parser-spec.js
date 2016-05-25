var taqay = require('../index.js');
describe('Parser', function() {
  var app;
  function preset() {
    this.htmlstring = "<html><head></head><body><div></div>" +
                      "<img src='some_remote_source'></body></html>";
    this.parser = undefined;
  }

  beforeEach(preset);

  describe('Parser constructor', function() {
    it('Receives a string containing html text, and creates a new parser', 
      function() {
      this.parser = app.createParser(this.htmlString);
      expect(this.parser).toBeDefined();
    }); 
   
    it('Loads the _treeBuilder property with the states that the Parser ' +
       'will handle.',
      function() {
      expect(this.parser._treeBuilder).toBeDefined();
      expect(this.parser._treeBuilder.prototype.constructor).toBe(TreeBuilder);
      expect(this.parser._treeBuilder._states.length).toBeGreaterThan(0);
    });
  });
});
