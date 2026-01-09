const {exec} = require("child_process");
const path = require('path');

const pythonExecutor = (filePath,jobId)=>{
    console.log(filePath);
    return new Promise((resolve,reject)=>{
        exec(`python ./savedFiles/${jobId}.py`,(error,stdout,stderr)=>{
            if(error){
                console.log(error);
                reject({error,stderr});
            }
            if(stderr){
                console.log(stderr);
                reject(stderr);
            }
            console.log(stdout);
            resolve(stdout);
        });
    });
}

module.exports = {
    pythonExecutor
}