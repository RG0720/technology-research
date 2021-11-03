window.addEventListener("unhandledrejection", function (e) {
//   e.preventDefault();
  console.log(e);
//   return true;
});

Promise.reject("promise error");
