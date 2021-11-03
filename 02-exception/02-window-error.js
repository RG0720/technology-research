/**
 * @param {String}  message    错误信息
 * @param {String}  source    出错文件
 * @param {Number}  lineno    行号
 * @param {Number}  colno    列号
 * @param {Object}  error  Error对象（对象）
 */

window.onerror = function (message, source, lineno, colno, error) {
  console.log("捕获到异常：", { message, source, lineno, colno, error });
  return true;
};
// const old = window.onerror;
// window.onerror = function (message, source, lineno, colno, error) {
//   if (old) old(message, source, lineno, colno, error);
//   console.log("捕获到异常2：", { message, source, lineno, colno, error });
// };

hello;
// const name = 'hello
// setTimeout(() => {
//   hello;
// });
