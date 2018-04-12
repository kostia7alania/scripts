//дата: март 2018
// взял тут - µ https://stackoverflow.com/questions/36250643/choose-datasource-file-in-imacros-javascript

// imacros imns.Dialogs.browseForFileOpen() does not provide a way to appendFilter 
var fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(Components.interfaces.nsIFilePicker);

// initial directory use Macros folder as defined in iMacros Preferences
fp.displayDirectory = imns.Pref.getFilePref('defsavepath');//DataSources=defdatapath
fp.init(window, "Select a File", Components.interfaces.nsIFilePicker.modeOpen);
fp.appendFilter("CSV File (*.csv)", "*.csv");

var sourcefile;
if(fp.show() == 0){
    sourcefile = fp.file.path;
}