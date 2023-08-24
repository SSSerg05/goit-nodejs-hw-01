import { promises as fs } from 'fs';
import path from 'path';

function readDir(folderPath = '') {
  const myFolderPath = path.dirname(folderPath)
  fs.readdir(myFolderPath)
    .then(files => {
      
      return Promise.all(
        files.map(async filename => {
          
          const currentPath = myFolderPath + '/' + filename
          const stats = await fs.stat(currentPath);
          return {
            Name: filename,
            Ext: path.extname(currentPath),
            Size: stats.size,
            Date: stats.mtime,
          };
        }),
      );

    })
    .then(result => {
      console.table(result)
    })
}

//readDir('./db/contacts.json')

export default readDir