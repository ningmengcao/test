/* 用户登陆函数 */
import { Message } from 'element-ui'
export default options => {
  options = JSON.parse(options.body)
  let name = options.name
  let password = options.password
  if (name === 'admin' && password === 'admin') {
    return name
  } else {
    console.log('用户密码错误')
    Message.error('用户或密码错误！')
  }
}
