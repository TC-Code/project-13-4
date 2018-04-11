function convertUptime(time) {
  var t;
  var h;
  var m;
  var s;
  t = time / 3600;
  h = Math.floor(time / 3600);
  m = Math.floor((t - h) * 60);
  s = Math.floor(((t - h) * 60 - m) * 60);

  console.log("Uptime:~ " + h + "h:" + m + "min:" + s + "sec");
}

exports.print = convertUptime;
