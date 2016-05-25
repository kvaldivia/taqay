function extend(Child, Parent) {
  var hasProp = {}.hasOwnProperty;

  for (var key in Parent) {
    if (hasProp.call(Parent, key))
      Child[key] = Parent[key];
  }

  function ctor() { this.constructor = Child; }
  ctor.prototype = Parent.prototype;
  Child.prototype = new ctor();
  Child.uber = parent.prototype;
  return Child;
}

function implement(impl, contracts) {
  var protos = [];
  for (var each in contracts) {
    protos.push(Object.create(contracts[each]));
  }

  for (var p in protos) {
    for (var c in protos[p]) {
      if (typeof protos[p][c] === "function") {
        impl.prototype[c] = protos[p][c];
      }
    }
  }
  impl.prototype.constructor = impl;
}

exports.extend = extend;
exports.implement = implement;
