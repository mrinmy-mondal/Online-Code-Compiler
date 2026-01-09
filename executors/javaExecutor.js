const {exec} = require("child_process");
const path = require('path');

const javaExecutor = (filePath,jobId)=>{
    const saveFileDirectory = path.join(__dirname,"savedFiles");
    return new Promise((resolve,reject)=>{
        exec(`java ${filePath}`,(error,stdout,stderr)=>{
            if(error){
                reject({error,stderr});
            }
            if(stderr){
                reject(stderr);
            }
            resolve(stdout);
        });
    });
}

module.exports = {
    javaExecutor
}