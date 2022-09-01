const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const dir = __dirname + '/../file';
exports.listg = function(){
  let filedir = fs.readdirSync(dir);
  let filearr = new Array();
  for(let i=0; i<filedir.length; i++){
    let fileobj = new Object();
    let filestat = fs.statSync(dir + '\\' +filedir[i])
    let filesize = filestat.size / (1024*1024); //mb변환
    let filemtime = filestat.mtime;//마지막 수정시간

    fileobj.filename = filedir[i];
    fileobj.filesize = filesize.toFixed(3);
    fileobj.filemtime = filemtime;
    filearr.push(fileobj);
  }
  return filearr;
}
