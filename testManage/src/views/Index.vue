<template>
  <div class="mainBox">
    <!--设置顶部导航栏-->
    <div class=" head-title">
      <!--导航栏--左边-->
      <el-menu
        router
        :default-active="$route.path"
        class="head-left"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="yellow"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
      <!--导航栏--右边-->
      <el-menu
        class="head-right"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="yellow"
      >
        <el-menu-item index="100">
          <span> {{this.$route.query.name}}</span>
          <span class="el-icon-arrow-down"></span>
        </el-menu-item>
      </el-menu>
    </div>
    <!--点击导航栏显示对应的页面内容-->
    <div id="main-container">
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      navList: [
        {name: '/Index', navItem: '主页'},
        {name: '/Overview', navItem: '总览'},
        {name: '/User', navItem: '用户'},
        {name: '/Company', navItem: '企业'},
        {name: '/Business', navItem: '业务'},
        {name: '/Finance', navItem: '财务'},
        {name: '/Label', navItem: '标签'},
        {name: '/Log', navItem: '日志'},
        {name: '/Manager', navItem: '管理员'}
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {}
  }
}
</script>

<style scoped>
  /*<!--内容-->*/
  #main-container {
    width: 100%;
  }

  /*<!--头部导航-->*/
  .head-right {
    float: right;
    line-height: 60px;
    padding: 0 10px;
  }

  .head-left {
    float: left;
    line-height: 60px;
    margin: 0;
    padding: 0;
  }

  .head-title {
    width: 100%;
    height: 60px;
    color: white;
    font-size: 16px;
    background-color: #545c64;
  }

  /*----总布局----*/
  .mainBox {
    width: 100%;
    height: 100%;
  }
</style>
