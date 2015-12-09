Loader = (function () {

  var group_queue      // group list
  var group_cursor = 0 // current group cursor
  var current_group_finished = 0

  var loadFinished = function () {
    current_group_finished ++
    if (current_group_finished == group_queue[group_cursor].length) {
      nextGroup()
      loadGroup()
    }
  }

  var nextGroup = function () {
    current_group_finished = 0
    group_cursor ++
  }

  var loadError = function (oError) {
    console.error('This script ' + oError.target.src + ' is not accessible.')
  }

  var loadScript = function (url) {
    console.log('load ' + url)
    var script = document.createElement('script')

    if (script.readyState) { // IE
      script.onreadystateChage = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystateChage = null
          loadFinished()
        }
      }
    } else { // Others
      script.onload = function () {
        loadFinished()
      }
    }

    script.onerror = loadError

    script.src = url + '?time=' + Date.parse(new Date())
    document.body.appendChild(script)
  }

  var loadGroup = function () {
    if (group_cursor >= group_queue.length)
      return
    current_group_finished = 0
    for (var idx = 0; idx < group_queue[group_cursor].length; idx ++) {
      loadScript(group_queue[group_cursor][idx])
    }
  }

  var loadMultiGroup = function (url_groups) {
    group_cursor = 0
    group_queue = url_groups
    loadGroup()
  }

  return {
    load: loadMultiGroup
  }

})()
