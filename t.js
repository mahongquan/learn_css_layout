import { transform } from 'babel-core';
import * as babel from 'babel-core';
var myplugin=function({ types: t }) {
  return {
    visitor: {
      Identifier(path, state) {},
      BinaryExpression(path,state) {
          if (path.node.operator !== "===") {
            return;
          }

          path.node.left = t.identifier("sebmck");
          path.node.right = t.identifier("dork");
      }
    }
  };
};
var options={
  plugins: [myplugin],
  babelrc:false,
  parserOpts: {
    "plugins": ["jsx", "flow"]
  }
};
function tFile(){
    babel.transformFile("./src/position_example.js", options, function (err, result) {
      //console.log(result); // => { code, map, ast }
      if(err){
        console.log(err);
      }
      else{
         console.log(result.code);
      }
    });
}
// var result = babel.transform("a==='';", options);
// console.log(result.code);
tFile();
// console.log(result);
// var a=require("babylon").parse("i=1;b=2;console.log(i+b);", {
//   // parse in strict mode and allow module declarations
//   sourceType: "module",

//   plugins: [
//     // enable jsx and flow syntax
//     "jsx",
//     "flow"
//   ]
// });
// var a=result.ast;
// var out_str="";
// for(var i in a.tokens){
//     if(a.tokens[i].value){
//             out_str +=a.tokens[i].value;
//     }
// }
// console.log(out_str);