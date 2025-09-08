## 在snowflake中，可以通过创建聚簇键来提高效率
```
ALTER TABLE po_data CLUSTER BY (po_id);
create or replace TABLE EDA_GC_PROD.FND_SEC.NDF_GC_COVERAGE_KPI cluster by (ID)
();
```

## 权限管理
```
1.snowflake和程序之间的通信，需要通过gid
2.而具体到用户的话，是通过snowflake role来进行管理的
```

