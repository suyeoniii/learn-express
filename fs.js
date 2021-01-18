const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("upload폴더가 없어 생성합니다");
  fs.mkdir("uploads");
}
