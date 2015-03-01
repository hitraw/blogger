
/**
 * Route mapping for web templates
 * @author Hitesh
 */

// home page
exports.index = function(req, res){
  res.render('index', { title: 'Blogger' });
};

// add blod page
exports.add = function(req, res){
  res.render('add', { title: 'Blogger' });
};