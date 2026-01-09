const languages =  {
  "c": ".c",
  "c++": ".cpp",
  "java": ".java",
  "python": ".py",
  "javascript": ".js",
  "typescript": ".ts",
  "go": ".go",
  "rust": ".rs",
  "ruby": ".rb",
  "php": ".php",
  "swift": ".swift",
  "kotlin": ".kt",
  "scala": ".scala",
  "perl": ".pl",
  "r": ".r",
}
getLanguages = ()=>{
  return Object.keys(languages);
}
getExtension = (language)=>{
    language = language.toLowerCase();
    return languages[language];
}

isLanguageSupported = (language)=>{
  language = language.toLowerCase();
  return language in languages;
}

module.exports = {getExtension,isLanguageSupported,getLanguages};