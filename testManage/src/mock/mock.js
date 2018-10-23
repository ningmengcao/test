/*
*   初始化  mock 测试
* */
import Mock from 'mockjs'
import userLogin from '@/mock/login'
import userInformation from '@/mock/userInformation'

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/mock/login', 'post', userLogin)
Mock.mock('/mock/user', 'get', userInformation)
