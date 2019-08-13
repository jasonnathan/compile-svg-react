var fs = Plugin.fs;
var StringDecoder = Npm.require("string_decoder").StringDecoder;
var decoder = new StringDecoder("utf8");

Plugin.registerCompiler(
  {
    extensions: ["svg"],
    archMatching: "web",
    filenames: []
  },
  function() {
    var compiler = new SVGCompiler();
    return compiler;
  }
);

function SVGCompiler() {}

SVGCompiler.prototype.processFilesForTarget = function(files) {
  //Iterate over files and add them to document
  files.forEach(function(file) {
    var fullPath = `${process.cwd()}/${file._resourceSlot.inputResource.path}`;
    // remove folder name and extension
    var fileName = fullPath.replace(/^.*[\\\/]/, "").replace(/\.[^.]*/, "");
    var data = fs.readFileSync(fullPath, { encoding: "utf-8" });

    file.addHtml({
      section: "body",
      data: '<div class="svg-sprite ' + fileName + '">' + data + "</div>"
    });
  });
};
