const authentication ={
    isLoggedIn: false,
    onLogin(){
      this.isLoggedIn= true
    },
    getLoginStatus(){
      return this.isLoggedIn
    }
  }
  export default authentication;