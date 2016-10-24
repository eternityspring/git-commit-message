
var simpleGit = require('simple-git')('./../../web-u-exam');

simpleGit.log('--since=1.days --author=wangsl',function(err,log){
  console.log(log);
});


