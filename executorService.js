const {cppExecutor} = require('./executors/cppExecutor');
const {javaExecutor} = require('./executors/javaExecutor')
const {pythonExecutor} = require('./executors/pythonExecutor')
const languages =  {
  "c++": cppExecutor,
  "java": javaExecutor,
  "python":pythonExecutor
}
const execute = async (path, id, language) => {
  if (language in languages) {
    let runner = languages[language];
      try {
    output = await runner(path, id);
  } catch (err) {
    output = JSON.stringify({
      error: err.error || err,
      stderr: err.stderr || null
    });
  }
 
    
    return output;                        
  } else {
    return "Executor Not Available";
  }
};



module.exports = {
    execute
}