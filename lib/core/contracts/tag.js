var Tag = {
  queryAttributes: function(attributeObject) {
    for (var att in attributeObject) {
      if (this._attributes[att] !== attributeObject[att]) {
        return false;
      }
    }
    return true;
  },

  getName: function(attributeObject) {
    return this._name;
  },

  getAttributes: function(attributeObject) {
    return this._attributes;
  },

  setName: function(name) {
    this._name = name;
  }
};

exports.createTag = function() {
  return Object.create(Tag);
};
