这是一个拼字符串的练习
注意看题，做题之前先读题，比对字符串需要将结果写入到文件中进行比较
```
require('fs').writeFileSync('./string2.txt',expected);
```
string.txt相对于项目根目录被创建
在测试文件中也将期待结果写入文件中

测试时,同时选中两个文件
```
Ctrl+D
```
查找不同