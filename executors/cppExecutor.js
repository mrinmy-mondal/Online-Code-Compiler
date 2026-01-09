const {exec} = require("child_process");
const path = require('path');

const cppExecutor = (filePath,jobId)=>{
    const saveFileDirectory = path.join(__dirname,"savedFiles");
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filePath} -o ${jobId} && ./${jobId}.out`,(error,stdout,stderr)=>{
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
    cppExecutor
}