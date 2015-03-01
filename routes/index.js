
/**
 * Route mapping for web views
 * @author Hitesh
 */

// home page
exports.index = function(req, res){
  res.render('index', { title: 'Mini Blogger' });
};

// add blog page
exports.add = function(req, res){
  res.render('add', { title: 'Mini Blogger' });
};