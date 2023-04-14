# gugong_crawler

## 使用方法

1. 访问故宫字帖的详情页，例如：`https://en.dpm.org.cn/dyx.html?path=/tilegenerator/dest/files/image/8831/2011/1931/img0007.xml`
2. 复制地址栏中的参数
3. 截取后半段，拼接成xml的访问地址：`https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2011/1931/img0007.xml`
4. 访问这个地址，获取canvas宽高和tile_size，修改index.html中以下参数

```
const CANVAS_SIZE = {
  width: 20456,
  height: 3418,
  tile_size: 256
}
```

5. 打开浏览器控制台network，查看放到到最大等级的图片baseUrl，例如：`https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2011/1931/img0007_files/15`，赋值给`TILE_BASE_URL`
6. 拖动预览图片至右下角，获取最大行列值，例如最多79列，13行，复制给`MAX_COLUMN`和`MAX_ROW`

**完成以上修改后，用浏览器打开index.html即可看到canvas绘制的大图。在页面中，右键另存为，即可下载到本地！**