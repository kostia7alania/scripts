function esc(prog) {
  var prgpath = prog;
  var args = ["-n", "6", "google.com"];
  var file = Components.classes["@mozilla.org/file/local;1"].createInstance(
    Components.interfaces.nsILocalFile
  );
  file.initWithPath(prgpath);
  var process = Components.classes[
    "@mozilla.org/process/util;1"
  ].createInstance(Components.interfaces.nsIProcess);
  process.init(file);
  process.run(false, args, args.length);
}

esc("C:\\esc.exe"); // вызов программы esc.exe