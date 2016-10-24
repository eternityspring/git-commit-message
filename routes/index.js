var express = require('express');
var router = express.Router();
var config = require('../config');
var simpleGit = require('simple-git')(config.projectPath);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/git', function(req, res, next) {
  simpleGit.log(["--since='1 day ago'","--author="+config.gitName],function(err,log){
    config.hidePrototype.forEach(function (item) {
      delete log[item];
    });
    if(config.filterMerge){
      log.all = log.all.map(function (item) {
        if(!/Merge/.test(item.message)){
          return item;
        }
      });
    }
    req.log = log;
    next();
  });
});
router.get('/git', function(req, res) {
  res.json(req.log);
});

module.exports = router;
