
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    locals : { 
              title : 'LocoShare'
             ,description: 'Your location, how you want it!'
             ,author: 'Your Name'
            }
  });
};

/*
 * POST location
 */

exports.share = function(req, res) {
  if (req.method === 'POST' 
      && req.body.longitude != null 
      && req.body.latitude != null) {
    console.log('POST: ' + req.body.latitude + ', ' + req.body.longitude);
  }
};

/*
 * GET location
 */

exports.show = function(req, res) {
  res.render('show', { 
    locals : { 
              title : 'LocoShow'
             ,description: 'Your location, how you want it!'
             ,author: 'Your Name'
            }
  });
};
  
