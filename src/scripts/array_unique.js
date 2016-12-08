function unique (a) {
  var res = []
  var i
  var iLen
  for (i = 0, iLen = a.length; i < iLen; i++) {
    var item = a[i]
    for (var j = 0, jLen = res.length; j < jLen; j++) {
      if (res[j] === item) break
    }
    if (j === jLen) res.push(item)
  }
  return res
}

function uniqueES5 (a) {
  return a.filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
}

function uniqueES6 (a) {
  return Array.from(new Set(a))
}
