exports.User = function() {
  var that = this;
  this.shares = { /* share name => share object */ };

  /*
   * Create a new share for the user 
   */
  this.createShare = function(name) {
    var share = new Share().init();
    that.shares[name] = share;
    return share.id;
  };
}
