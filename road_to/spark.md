## parquet
```
1. 列式存储格式：
```

## Delta Lake
```
1. 基于parquet：delta lake是一种存储层,构建在Parquet文件格式之上，提供了额外的功能。
2. ACID事务
3. 时间旅行：可以查询历史数据版本
4. 高效的文件管理：提供了自动小文件合并和优化写入等功能，提升查询性能。
```


## spark中的配置
```
如果需要给spark 配置 config,比如在spark 的高版本中不支持时间的格式，需要自己指定

from pyspark import SparkConf, SparkSession
spark = SparkSession.builder.config("spark.sql.parquet.datetimeRebaseModeInWrite", "LEGACY") \
    .getOrCreate()

这样创建的spark就是带有这种性质的
```


```
但是配置的时候还是有区别的。
1.spark = SparkSession.builder.config("spark.sql.parquet.datetimeRebaseModeInWrite", "LEGACY").getOrCreate()

这种方式直接在 SparkSession.builder 中设置配置参数，有时可能会因为配置顺序或者其他原因导致配置未被正确使用。

2.
from pyspark import SparkConf
from pyspark.sql import SparkSession

spark = SparkSession.builder.config(conf=SparkConf().set('spark.sql.parquet.datetimeRebaseModeInRead', 'LEGACY')).getOrCreate()

这样的方式是使用SparkConf() 对象来配置参数，然后将 SparkConf 对象传递给 SparkSession 构建器，确保配置在 SparkSession 创建之前就被正确应用。这样的方式比较可靠的。

3.
SparkSession 和 SparkConf 是两种不同的类，在功能和用途上有所不同。

a. SparkSession
SparkSession 是Spark 2.0引入的一个统一的入口点，用于与Spark 的所有功能进行交互，封装了 SparkContext, SQLContext 和 HiveContext。
SparkSession 可以用于创建 DataFrame，执行SQL

b. SparkConf
SparkConf 是用于配置 Spark 应用程序的类，允许配置各种参数。SparkConf 用于在创建 SparkContext 和 SparkSession 时传递配置参数。
通过 SparkConf() 创建，并使用set方法设置配置参数。

SparkConf 用于配置Spark参数，如果要配置的化，使用这个
SparkSession 是用于与Spark 交互的高级入口点。
```
