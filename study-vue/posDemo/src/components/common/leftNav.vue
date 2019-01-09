<template>
    <div class = "left-nav">
      <!--<ul>-->
        <!--<li>-->
          <!--<i class = "icon iconfont icon-qian"></i>-->
          <!--<div>收银</div>-->
        <!--</li>-->
        <!--<li>-->
          <!--<i class = "icon iconfont icon-dianpu"></i>-->
          <!--<div>店铺</div>-->
        <!--</li>-->
        <!--<li>-->
          <!--<i class = "icon iconfont icon-hanbao"></i>-->
          <!--<div>商品</div>-->
        <!--</li>-->
        <!--<li>-->
        <!--<i class = "icon iconfont icon-huiyuanqia"></i>-->
        <!--<div>会员</div>-->
        <!--</li>-->
        <!--<li>-->
          <!--<i class = "icon iconfont icon-shijian"></i>-->
          <!--<div>抢购</div>-->
        <!--</li>-->
        <!--<li>-->
          <!--<i class = "icon iconfont icon-tongji1"></i>-->
          <!--<div>统计</div>-->
        <!--</li>-->

      <!--</ul>-->
      <el-menu
        background-color="#1D8ce0"
        text-color="#fff"
        active-text-color = "greenyellow"
        :default-active = "navLabel"
        @select="handleSelect"
        style = "height: 100%"
        >
        <el-menu-item index = "/Pos">
          <i class = "icon iconfont icon-qian"></i>
          <span>收银</span>
        </el-menu-item>
        <el-menu-item index = "/Shop">
          <i class = "icon iconfont icon-dianpu"></i>
          <span>店铺</span>
        </el-menu-item>
        <el-menu-item index = "3">
          <i class = "icon iconfont icon-hanbao"></i>
          <span>商品</span>
        </el-menu-item>
        <el-menu-item index = "4">
          <i class = "icon iconfont icon-huiyuanqia"></i>
          <span>会员</span>
        </el-menu-item>
        <el-menu-item index = "5">
          <i class = "icon iconfont icon-shijian"></i>
          <span>抢购</span>
        </el-menu-item>
        <el-menu-item index = "6">
          <i class = "icon iconfont icon-tongji1"></i>
          <span>统计</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
      navLabel: '/Pos'
    }
  },
  methods: {
    handleSelect (path) {
      this.$router.push({
        path: path
      })
    }
  }
}
</script>

<style scoped>
  .left-nav{
    color:#fff;
    font-size:10px;
    height:100%;
    /*background-color: #1D8ce0;*/
    float:left;
    width:5%;
  }
  .iconfont{
    font-size:24px;
    color:#fff
  }
  .left-nav ul{
    padding:0px;
    margin: 0px;
  }
  .left-nav li{
    list-style: none;
    text-align: center;
    border-bottom:1px solid #20a0ff;
    /*padding:10px;*/
  }
</style>
