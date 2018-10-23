// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
Random.extend({
  number: function (number) {
    number = number + 1
  }
})
export default () => {
  let userList = []
  for (let i = 0; i < 100; i++) {
    let newObject = {
      orderNumber: i,
      name: Random.cname(),
      weChatName: Random.name(),
      sex: Random.pick(['男', '女']),
      city: Random.city(),
      phoneNumber: '15226855566',
      careerObjective: Random.ctitle(),
      experience: Random.pick(['应届生', '1-3年', '3-5年', '5-10年', '10年以上', '不限']),
      education: Random.pick(['高中及以下', '大专', '本科', '研究生', '博士']),
      salaryClaim: Random.natural(1000, 10000),
      authState: Random.pick(['未认证', '已认证']),
      bindCompany: Random.natural(1, 10),
      balance: Random.natural(0, 100000) + '.00元'
    }
    userList.push(newObject)
  }

  return {
    userList: userList
  }
}
