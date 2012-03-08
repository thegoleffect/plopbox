(function() {
  var directory, exec, rsync, spawn, watch, _ref;

  _ref = require("child_process"), exec = _ref.exec, spawn = _ref.spawn;

  watch = require("watch");

  directory = process.env.DIR || "./";

  rsync = function(f) {
    return console.log(f, "changed");
  };

  watch.createMonitor(directory, function(monitor) {
    monitor.on("created", rsync);
    monitor.on("changed", rsync);
    return monitor.on("removed", rsync);
  });

}).call(this);
