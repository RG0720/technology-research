const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "test.log");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
} catch (err) {
  console.error(err);
}

// fs.readFile() 和 fs.readFileSync() 都会在返回数据之前将文件的全部内容读取到内存中。
// 这意味着大文件会对内存的消耗和程序执行的速度产生重大的影响。
// 在这种情况下，更好的选择是使用流来读取文件的内容。
