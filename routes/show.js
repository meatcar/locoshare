
/*
 * GET location
 */

exports.show = function(req, res) {
  res.render('index', { 
    locals : { 
              title : 'LocoShare'
             ,description: 'Your location, how you want it!'
             ,author: 'Your Name'
            }
  });
};
