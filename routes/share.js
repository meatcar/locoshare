/*
 * POST location
 */

exports.share = function(req, res) {
  console.log('POST!~!!');
  if (req.method === 'POST' 
      && req.body.longitude != null 
      && req.body.latitude != null) {
    console.log(req.body.latitude + ', ' + req.body.longitude);
  }
};
