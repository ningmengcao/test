<template>
  <div>
    <ul  v-for="(item,index) in checkList" :key="index" v-if="isCheckList">
     <el-badge value = "New" class = "margin-top-15">
      <li>
        <div @click="jumpToCheckOut(item,index)" class="font-14 margin-right-20">
         <small>用户挂单</small>
         <strong class = "margin-right-20">编号：{{item.checkListNumber}}</strong>
         <small>购买的商品</small>
         <strong class = "margin-right-20">数量：{{item.totalCount}}</strong>
         <small>商品</small>
         <strong>金额：{{item.totalMoney}}元</strong>
        </div>
      </li>
    </el-badge>
    </ul>
    <div v-if="!isCheckList" class = "text-center color-indianred">
      <h3>没有用户挂单</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkList',
  props: {
    isCheckList: {
      default: false
    },
    checkListData: {
      require: true
    },
    checkList: {
      require: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    jumpToCheckOut (checkObj, index) {
      this.$emit('callBackOrderGoods', this.checkListData, checkObj, index)
      // this.deleteCheckData(index)
    }
  }
}
</script>

<style>
  .el-badge__content{
    color: red !important;
    background-color: #fff;
    font-weight: bold;
  }
</style>
