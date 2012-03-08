{exec, spawn} = require("child_process")
watch = require("watch")

directory = process.env.DIR || "./"

rsync = (f) ->
  # exec(cmd, (err, stdout, stderr) ->) # Just replace cmd with your rsync command
  # console.log(f, "changed") # use this to test if it worked

watch.createMonitor(directory, (monitor) ->
  monitor.on("created", rsync)
  monitor.on("changed", rsync)
  monitor.on("removed", rsync)
)