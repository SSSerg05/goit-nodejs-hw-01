import { promises as fs } from 'fs';
import path from 'path';

const folderPath = './db/contacts'
// fs.readdirSync(folderPath)


function readDir(currentPath='') {
  fs.readdir(currentPath)
  .then(files => {
    return Promise.all(
      files.map(async filename => {
        const stats = await fs.stat(filename);
        return {
          Name: filename,
          Size: stats.size,
          Date: stats.mtime,
        };
      }),
    );
  })
  .then(result => console.table(result));
}

export default readDir