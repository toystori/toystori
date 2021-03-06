
/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
}

/*
 *  User authorization routing middleware
 */

exports.user = {
  hasAuthorization : function (req, res, next) {
    if (req.profile.id != req.user.id) {
      req.flash('info', 'You are not authorized')
      return res.redirect('/users/'+req.profile.id)
    }
    next()
  }
}

/*
 *  toy authorization routing middleware
 */

exports.toy = {
  hasAuthorization : function (req, res, next) {
    if (req.toy.user.id != req.user.id) {
      req.flash('info', 'You are not authorized')
      return res.redirect('/toy/'+req.toy.id)
    }
    next()
  }
}
