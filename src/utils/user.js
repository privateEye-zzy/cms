const ls = window.localStorage
class User{
  static getInstance() {
	if(!User.instance) {User.instance = new User()}
    return User.instance
  }
  async login(username, pwd, cb) {
  	this.clear()
  	//await
  	ls.setItem('user', JSON.stringify({username:'zzy'}))
  	cb()
  }
  async logout() {
  	this.clear()
  }
  getUser() {
  	return JSON.parse(ls.getItem('user'))
  }
  isLogin(cb) {
  	return ls.getItem('user') ? true : false
  }
  clear() {ls.clear()}
}
export default User.getInstance()