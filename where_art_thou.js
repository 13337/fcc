function where(collection, source) {
  var i, arr = [];
  // What's in a name?
  var key = Object.keys(source);
  for (var name in collection) {
    if (collection[name][key] === source[key]) {
      arr.push(collection[name]);
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
