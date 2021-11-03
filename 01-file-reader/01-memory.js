/**
heapTotal and heapUsed refer to V8's memory usage.

external refers to the memory usage of C++ objects bound to JavaScript objects managed by V8.

rss, Resident Set Size, is the amount of space occupied in the main memory device
 (that is a subset of the total allocated memory) for the process, including all C++ and JavaScript objects and code.

arrayBuffers refers to memory allocated for ArrayBuffers and SharedArrayBuffers, including all Node.js Buffers. 
This is also included in the external value. When Node.js is used as an embedded library,
 this value may be 0 because allocations for ArrayBuffers may not be tracked in that case.
 */

// http://nodejs.cn/api/process/process_memoryusage.html
// console.log("mem before", process.memoryUsage());

// Allocates a new Buffer of size bytes.
// Buffer.alloc(10);

// console.log("mem after", process.memoryUsage());

function showMemory(j) {
  console.log(`这是第${j + 1}次运行`);
  var mem = process.memoryUsage();

  function format(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + "MB";
  }

  console.log(
    `Process:总共申请的内存heapTotal:${format(
      mem.heapTotal
    )}, 目前堆中使用内存heapUsed:${format(mem.heapUsed)},常驻内存rss:${format(
      mem.rss
    )}`
  );
  console.log(
    "======================================================================================"
  );
}

//吃人函数
function useMem() {
  var size = 20 * 1024 * 1024;
  var arr = new Array(size);
  for (var i = 0; i < size; i++) {
    arr[i] = 0;
  }
  return arr;
}

var total = [];

for (var j = 0; j < 20; j++) {
  //运行20次，实际上也不会达到，因为会内存耗尽
  showMemory(j);
  total.push(useMem());
}

showMemory(j);
