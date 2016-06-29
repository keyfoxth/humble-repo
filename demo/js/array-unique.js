function unique(a) {
  var res = []
  for (var i = 0, iLen = a.length; i < iLen; i++) {
    var item = a[i]
    for (var j = 0, jLen = res.length; j < jLen; j++) {
      if (res[j] === item) break
    }
    if (j === jLen) res.push(item)
  }
  return res
}

// ES5 // --------------------------------------------------
function unique(a) {
  return a.filter(function(item, index, array) {
    return array.indexOf(item) === index
  })
}

// ES6 // --------------------------------------------------
function unique(a) {
  return Array.from(new Set(a));
}
