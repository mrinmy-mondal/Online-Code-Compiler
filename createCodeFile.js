const {getExtension} = require('./languageHelper');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const saveFileDirectory = path.join(__dirname,"savedFiles");

if(!fs.existsSync(saveFileDirectory)){
    fs.mkdirSync(saveFileDirectory,{recursive:true});
}

const createFile = async (language,code)=>{
    const id = crypto.randomUUID();
    const filename = `${id}${getExtension(language)}`;
    const filePath = path.join(saveFileDirectory,filename);
    console.log(filePath);
    await fs.writeFileSync(filePath,code);
    return {filePath,id};
}

module.exports = {createFile};
