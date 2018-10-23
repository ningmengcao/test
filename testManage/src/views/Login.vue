<!--suppress ALL -->
<template>
  <div class="login-main">
    <div class="login-box">
      <input class="input-user" placeholder="用户名" v-model="loginForm.name"/>
      <input class="input-user" placeholder="密码" v-model="loginForm.password" type="password"/>
      <button class="bubtton-login" @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.loginForm.name && this.loginForm.password) {
        this.$axios.post('/mock/login', this.loginForm)
          .then(res => {
            console.log(res.data)
            if (res.data) {
              this.$router.push({
                path: '/Index',
                query: {
                  name: res.data
                }
              })
            }
          })
      } else {
        console.log('请填写用户名或密码！')
        this.$message.error('请填写用户名或密码')
      }
    }
  }
}

</script>

<style scoped>
  .login-main {
    width: 100vm;
    height: 100vh;
    background: url("../assets/image/login-bg.jpg") no-repeat center;
    background-size: cover;
    display: flex;
  }

  /*<!--登录框-->*/
  .login-box {
    width: 350px;
    background-color: #ccc;
    padding: 30px;
    margin: auto 150px auto auto;
    border-radius: 8px;
  }

  /*登陆窗口 输入框*/
  .input-user {
    width: 100%;
    height: 40px;
    display: block;
    margin: 15px 0;
    padding-left: 10px;
  }

  /*按钮*/
  .bubtton-login {
    width: 100%;
    height: 40px;
    background-color: #ff0000;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin: 15px 0;
    margin-left: 10px;
  }
</style>
