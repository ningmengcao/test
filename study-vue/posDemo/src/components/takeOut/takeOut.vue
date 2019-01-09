<template>
    <div>
      <div style="color: #F56C6C" class="font-14" v-if="isHavaNewOrders">收到新订单，请问是否接受新订单!</div>
      <div>
        <div class="margin-bottom-20" v-for="(item,index) in newOrderListData" :key = "index">
          <el-badge value = "新订单">
            <small>用户：<strong>{{item.userName}}</strong></small>
            <small>商品数量：<strong>{{item.totalCount}}</strong></small>
            <small>金额：<strong>{{item.totalMoney}}元</strong></small>
            <small>配送费：<strong>{{item.distributionFee}}元</strong></small>
            <small>距离：<strong>{{item.distance}}6km</strong></small>
            <small>预计送达时间：<strong>{{item.transitTime}}</strong></small>
          </el-badge>
          <div class="f-right">
            <el-button type = "success" size = "small" circle icon = "el-icon-check" @click="acceptNewOrders(item)"></el-button>
            <el-button type = "warning" size = "small" circle icon = "el-icon-close" @click="refuseNewOrders(index)"></el-button>
          </div>
        </div>
      </div>

      <div class="margin-bottom-20">
        <h5>待处理订单列表</h5>
        <div>
          <el-table :data = "orderListData" max-height="400">
            <el-table-column v-for = "(item,index) in orderColumn" :key="index" :label = "item.label" :prop = "item.prop" :width = "item.width"></el-table-column>
            <el-table-column label = "操作">
              <template slot-scope = "scope">
                  <el-button @click="viewOrdersDetail(scope.row)" type="primary" size="small" icon = "el-icon-view" circle></el-button>
                  <el-button @click="deleteOrders(scope.$index)"  type="primary" size="small" icon = "el-icon-delete" circle></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div>
        <h5>已送达订单</h5>
      </div>
    </div>
</template>

<script>
export default {
  name: 'takeOut',
  data () {
    return {
      isHavaNewOrders: true,
      newOrderListData: [
        {userName: 'dfse柠檬', totalCount: 6, totaMmoney: 100, distributionFee: 4.5, distance: 5.3, transitTime: '12:16'},
        {userName: '我爱娃哈哈', totalCount: 2, totaMmoney: 36, distributionFee: 1.5, distance: 1.3, transitTime: '11:44'}
      ],
      orderListData: [
        {orderNumber: '20180107152402', userName: 'dksjodjgv', orderMoney: 28, orderCount: 2, deliveryClerk: '跑得快', deliveryClerkPhone: '15283507405', distance: 2.3, state: '正在配送中'},
        {orderNumber: '20180107110401', userName: '哈哈哈', orderMoney: 58, orderCount: 3, deliveryClerk: '非常快', deliveryClerkPhone: '15283507405', distance: 3.6, state: '正赶往取件'},
        {orderNumber: '20180107135001', userName: '没多少废品', orderMoney: 33, orderCount: 3, deliveryClerk: '跑得快', deliveryClerkPhone: '15283507405', distance: 2.3, state: '已送达'}
      ],
      orderColumn: [
        {label: '订单编号', prop: 'orderNumber'},
        {label: '用户名', prop: 'userName'},
        {label: '订单金额', prop: 'orderMoney'},
        {label: '商品数量', prop: 'orderCount'},
        {label: '配送员', prop: 'deliveryClerk'},
        {label: '配送员电话', prop: 'deliveryClerkPhone'},
        {label: '距离(km)', prop: 'distance'},
        {label: '状态', prop: 'state'}
      ]
    }
  },
  methods: {
    // 接受新订单
    acceptNewOrders (newData) {
      console.log(newData)
      let newOrderData = {
        orderNumber: '20180107152401',
        userName: newData.userName,
        orderMoney: 108,
        orderCount: newData.totalCount,
        deliveryClerk: '无',
        deliveryClerkPhone: '无',
        distance: 2.8,
        state: '等待配送员接单'}
      this.orderListData.push(newOrderData)
    },
    // 拒绝新订单
    refuseNewOrders (index) {
      this.newOrderListData.splice(index, 1)
      if (this.newOrderListData.length === 0) {
        this.isHavaNewOrders = false
      }
    },
    // 查看订单详情
    viewOrdersDetail (row) {
      this.$message.success('查看订单详情内容')
    },
    deleteOrders (index) {
      this.orderListData.splice(index, 1)
    }
  }
}
</script>

<style>
.el-badge__content.is-fixed{
  right: 0;
}
.el-button--small.is-circle {
  padding: 4px;
}
</style>
