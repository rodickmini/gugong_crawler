'use strict'

const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

async function downloadImage (url, fileName) {
  const path = Path.resolve(__dirname, 'images', fileName)
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  console.log(`download: ${fileName}`)

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

/* 
  苕溪诗帖 https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2008/1629/img0006_files/15/${i}_${j}.jpg
  0...120
  .
  .
  .
  8...120

  洛神赋贴 https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2011/2909/img0003_files/15/${i}_${j}.jpg
  0...120
  .
  .
  .
  8...120

  淡墨秋山 https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2009/1107/img0004_files/13/${i}_${j}.jpg
  0...18
  .
  .
  .
  12

  兰亭 https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2008/1628/img0010_files/15/${i}_${j}.jpg
  0...86
  .
  .
  .
  3
  

  */
let i = 0, j = 0
for(i = 0; i <= 120; i++) {
  for(j = 0; j <= 8; j++) {
    let url = `https://en.dpm.org.cn/tilegenerator/dest/files/image/8831/2008/1629/img0006_files/15/${i}_${j}.jpg`
    let fileName = `${i}_${j}.jpg`
    downloadImage(url, fileName)
  }
}

  