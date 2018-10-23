<template>
  <div class="padding-20">

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple border-right">
          <h5 class="h5-title ">运营管理</h5>
          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">用户</span></i>
            </div>
            <div class="item-content">
              <span>新增 200 / 合计 3000</span>
            </div>
          </div>

          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">企业</span></i>
            </div>
            <div class="item-content">
              <span>新增 200 / 合计 3000</span>
            </div>
          </div>

          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">职位</span></i>
            </div>
            <div class="item-content">
              <span>新增 200 / 合计 3000</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple border-right">
          <h5 class="h5-title ">财务管理</h5>
          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">今日用户充值金额</span></i>
            </div>
            <div class="item-content">
              <span>30000 元 / 135笔</span>
            </div>
          </div>

          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">今日用户提现金额</span></i>
            </div>
            <div class="item-content">
              <span>3000 元 / 60笔</span>
            </div>
          </div>

          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size"> 今日平台资金余额 （含用户账户）</span></i>
            </div>
            <div class="item-content">
              <span>3000000.00 元</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple ">
          <h5 class="h5-title ">标签管理</h5>
          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">今日用户待审标签</span></i>
            </div>
            <div class="item-content">
              <div>职位要求标签： 50个</div>
              <div>职位福利标签： 100个</div>
            </div>
          </div>
          <div class="border">
            <div class="dis-flex">
              <i class="icon-circleyuanquan icon-img"><span class="name-size">系统标签管理</span></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="bg-purple">暂无内容</el-row>

  </div>
</template>

<script>
export default {
  name: 'Overview'
}
</script>

<style scoped>
  /*<!--边框里的内容-->*/
  .item-content {
    margin-bottom: 40px;
    padding-left: 15px;
    color: #4a8bc3;
  }

  .name-size {
    font-size: 15px;
    padding-left: 5px;
  }

  .icon-img {
    font-size: 10px;
    padding: 15px;
  }

  .border {
    border: 2px #d4d4d4 solid;
    border-radius: 3px;
    margin: 20px;
    color: #666666;
    height: 120px;
  }

  .h5-title {
    padding-top: 20px;
    padding-left: 20px;
    text-align: left;
  }

  /*<!--总览背景分隔-->*/
  /*.border-right {*/
  /*border-right: 1px #d4d4d4 solid;*/
  /*}*/

  .el-row {
    margin-bottom: 20px;
  }

  .bg-purple {
    background-color: #e9e9e9;
  }

  .grid-content {
    border-radius: 4px;
    height: 70vh;
  }

  /*边距大小*/
  .padding-20 {
    padding: 20px;
  }
</style>
