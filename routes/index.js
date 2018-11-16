var express = require('express');
var router = express.Router();
var si = require('systeminformation');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/getProcessData', function(req, res, next) {
  si.processes()
    .then(data => {
         
          var numProc = data.list.length;
          var i = 0;
          var process = [];
          for(i =0;i<numProc;i++){
             var proc = data.list[i];
             //var temp = {pid:proc.pid , command:proc.command , pcpu:proc.pcpu , pmem:proc.pmem};
             //console.log(temp);
             var temp = [proc.pid , proc.command,proc.pcpu,proc.pmem];
             process.push(temp);
          }
          console.log("process: ", process);
          var resp = {
              "draw":1,
              "recordsTotal":numProc,
              "recordsFilter":numProc,
              "data":process
          };
          console.log("response: ", resp);
          res.send(resp);      
    })
    .catch(error => res.send(error));
});

module.exports = router;
