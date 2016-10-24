var express = require('express');
var router = express.Router();
var config = require('../config');
var simpleGit = require('simple-git')(config.projectPath);

/* GET home page. */
router.get('/', function(req, res, next) {
  simpleGit.log(["--since='1 day ago'","--author="+config.gitName],function(err,log){
    config.hidePrototype.forEach(function (item) {
      delete log[item];
    });
    if(config.filterMerge){
      log.all.forEach(function (item,i) {
        if(/Merge/.test(item.message)){
          log.all.splice(i,1);
        }
      });
    }
    log.daily = log.all.map(function (item,i) {
      return item.message;
    });
    delete log.all;
    req.log = log;
    next();
  });
});
router.get('/', function(req, res) {
  res.render('index', { title: '日报',data:req.log });
});
router.get('/git', function(req, res, next) {
  simpleGit.log(["--since='1 day ago'","--author="+config.gitName],function(err,log){
    config.hidePrototype.forEach(function (item) {
      delete log[item];
    });
    if(config.filterMerge){
      log.all.forEach(function (item,i) {
        if(/Merge/.test(item.message)){
          log.all.splice(i,1);
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
