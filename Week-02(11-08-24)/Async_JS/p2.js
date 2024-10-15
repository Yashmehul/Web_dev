const fs = require("fs");
//fs reads for file system .....
//we ned external library for using such funtionalities
let contents1 = fs.readFileSync("D:\\COHORT_3.0\\Web_dev\\Class-02(11-08-24)\\Async_JS\\my_read.txt", "utf-8");
console.log(contents1);

let contents2=fs.readFileSync("D:\\COHORT_3.0\\Web_dev\\Class-02(11-08-24)\\Async_JS\\b.txt", "utf-8");
console.log(contents2);
