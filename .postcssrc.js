// ESM - js (node.js에서 사용하는 개념이 아님)
// CommonJS - node.js에서 사용

//import 가져오기
//import autoprefixer from 'autoprefixer' ==
// const autoprefixer = require("autoprefixer");

//export 내보내기
// export {
//     plugins: [
//         autoprefixer
//     ]
// }

module.exports = {
  plugins: require("autoprefixer"),
};
