console.log('base.js: time = ' + Date.parse(new Date()))

var myAlert = function (msg) {
  console.log('alert at ' + Date.parse(new Date()))
  alert(msg)
}

var myLog = function (msg) {
  console.log(msg)
}
