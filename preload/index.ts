import * as fs from 'fs';
import * as path from 'path';
import { FaBiaoQing } from './spider';

import * as request from 'request';

const copyImage = (url: string) => {
  request.get(url, {
    encoding: null
  }, (err, response: request.Response, buffer: Buffer) => {
    if (err) {
      console.log(err)
    } else {
      const result = utools.copyImage(buffer);
      console.log(
        {
          url,
          length: buffer.length,
          result
        }
      );
    }
  });
}

const copyFile = (url: string) => {
  const tempPath = utools.getPath('temp');
  const writeStream = fs.createWriteStream(path.join(tempPath, '1.gif'));
  request(url).pipe(writeStream).on('close', () => {
    console.log(path.join(tempPath, '1.gif'));
    utools.copyFile(path.join(tempPath, '1.gif'));
  })
}

window.copyImage = copyFile;
window.fba = new FaBiaoQing();
