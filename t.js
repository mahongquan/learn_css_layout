// import { transform } from 'babel-core';
// import * as babel from 'babel-core';
// var options={};
// babel.transformFile("./src/index.js", options, function (err, result) {
//   //console.log(result); // => { code, map, ast }
//   console.log(result.ast);
// });

var a=require("babylon").parse("i=1;b=2;console.log(i+b);", {
  // parse in strict mode and allow module declarations
  sourceType: "module",

  plugins: [
    // enable jsx and flow syntax
    "jsx",
    "flow"
  ]
});
var out_str="";
for(var i in a.tokens){
    if(a.tokens[i].value){
            out_str +=a.tokens[i].value;
    }
}
console.log(out_str);