exports.index = function(req, res){
res.render('index', { title: 'Index' });
};
exports.login = function(req, res){
res.render('login', { title: '用户登陆'});
};

exports.doLogin = function(req, res){
var user={
username:'admin',
password:'admin'
}
return res.redirect('/home');
};

exports.logout = function(req, res){
res.redirect('/');
};

exports.home = function(req, res){
  res.render('home', { title: 'Home'});
};
