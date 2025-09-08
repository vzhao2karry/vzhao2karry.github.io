可以在本地安装 ollama
1.
```
ollama pull llama3.2
```

2.可以在当前的路径下面创建一个Modelfile 文件，Modelfile 文件的编写是有格式规范的，具体可以参考 (https://github.com/ollama/ollama/blob/main/docs/modelfile.md)
```
创建完 Modelfile 之后，可以根据这个文件创建一个模型，名字自己定义
ollama create M.E. -f ./Modelfile
ollama run M.E.
```

详细的内容还可以参考 (https://github.com/ollama/ollama)


3.设置cmd页面的编码
chcp 936： 指定页面的编码是GBK
chcp 65001： 指定页面的编码是UTF-8

在cmd中指定完编码之后，再Modelfile中设置用中文回应。


4.在自己的电脑上面安装 docker 和 ollama
