 const express = require('express');
 const {isLanguageSupported,getLanguages} = require('./languageHelper')
 const {createFile} = require('./createCodeFile');
 const executor = require('./executorService');
 const app = express();
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.set('view engine','ejs');
 let languages = getLanguages();
 app.get("/",(req,res)=>{
    res.render('index', {languages});
 })

 app.post("/run",async (req,res)=>{
   const selectedLanguage = req.body.language;
   const code = req.body.code;
   
   if(selectedLanguage == null){
      output = 'Language Undefined';
      res.render('index',{languages,selectedLanguage,code,output});
   }else if(code == null || code.length == 0){
      output = 'Empty Code';
      res.render('index',{languages,selectedLanguage,code,output});
   }else if(!isLanguageSupported(selectedLanguage)){
      output = 'Unsupported Language';
      res.render('index',{languages,selectedLanguage,code,output});
   }else{

    const result = await createFile(selectedLanguage, code);
const { filePath, id } = result;

    let output = await executor.execute(filePath,id,selectedLanguage);
    console
    res.render('index',{languages,selectedLanguage,code,output});
   }
   

 })

 app.listen(3000,()=>{
    console.log("Listening on port 3000");
 })