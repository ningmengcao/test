<template>
    <div class = "pos">
      <div>
        <el-row >
          <el-col :span = "10"  id = "order-list" class = "pos-order padding-0-10">
              <el-tabs v-model = "activeTabsName">
                <el-tab-pane label = "点餐" name = "orderGoods">

                  <order-goods
                    @deleteGoods = "deleteGoods"
                    @addOrderList = "addOrderList"
                    @reduceOrderList = "reduceOrderList"
                    @delAllGoods = "delAllGoods"
                    @submitCheckList = "submitCheckList"
                    @isDirectBill = "directBill"
                    :tableData = "tableData"
                    :totalCount = "totalCount"
                    :totalMoney = "totalMoney"
                    :isDirectBill = "isDirectBill"
                    :checkUserNumber = "checkUserNumber"></order-goods>

                </el-tab-pane>

                <el-tab-pane label = "挂单" name = "checkList">

                  <check-list
                    :isCheckList = "isCheckList"
                    :checkListData="checkListData"
                    :checkList = "checkList"
                    @callBackOrderGoods = "callBackOrderGoods"></check-list>

                </el-tab-pane>

                <el-tab-pane label = "外卖" name = "takeOut">
                  <take-out></take-out>
                </el-tab-pane>
              </el-tabs>
          </el-col>

          <el-col :span = "14" id = "goods-list" class = "goods">
              <goods-list @addOrderList = "addOrderList"></goods-list>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import goodsList from '@/components/common/goodsList'
import orderGoods from '@/components/orderGoods/orderGoods'
import CheckList from '@/components/checkList/checkList'
import TakeOut from '../takeOut/takeOut'
export default {
  name: 'Pos',
  components: {TakeOut, CheckList, goodsList, orderGoods},
  data () {
    return {
      tableData: [],
      totalCount: 0,
      totalMoney: 0,
      checkUserNumber: 0, // 单个挂单的编号
      checkList: [], // 挂单列表
      checkListData: [], // 单个挂单的数据
      isCheckList: false, // 是否存在挂单数据
      isNewCheckData: true, // 是否是新添加的挂单数据
      isDirectBill: false, // 默认不直接挂单，需要输入编号后才能进行挂单
      activeTabsName: 'orderGoods' // 默认直接显示点餐
    }
  },
  mounted: function () {
    var orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px'
    document.getElementById('goods-list').style.height = orderHeight + 'px'
  },
  methods: {
    // 点击挂单中商品返回点餐
    callBackOrderGoods (checkListData, checkObj, index) {
      this.activeTabsName = 'orderGoods'
      // 在点餐中显示商品
      this.tableData = checkListData
      this.totalMoney = checkObj.totalMoney
      this.totalCount = checkObj.totalCount
      // 把存在的挂单编号赋给checkUserNumber
      this.checkUserNumber = checkObj.checkListNumber
      this.isDirectBill = true
      // 删除该单在挂单列表中的数据
      this.deleteCheckData(index)
    },
    // 删除挂单数据
    deleteCheckData (index) {
      this.checkList.splice(index, 1)
    },
    // 删除单个商品
    deleteGoods (index) {
      this.totalCount -= this.tableData[index].count
      this.tableData.splice(index, 1)
      this.getTotalMoney()
    },
    // 添加商品
    addOrderList (goods) {
      let isHaveGoods = false
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHaveGoods = true
        }
      }
      if (isHaveGoods) {
        this.tableData.filter(item => item.goodsId === goods.goodsId)[0].count++
      } else {
        let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 }
        this.tableData.push(newGoods)
      }
      this.totalCount++
      this.getTotalMoney()
    },
    // 减少商品
    reduceOrderList (goods, index) {
      let isHaveGoods = false
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHaveGoods = true
        }
      }
      if (isHaveGoods) {
        let goodsList = this.tableData.filter(item => item.goodsId === goods.goodsId)
        goodsList[0].count--
        if (goodsList[0].count === 0) {
          this.deleteGoods(index)
        }
      } else {
        this.$message.error('商品并不存在')
      }
      this.totalCount--
      this.getTotalMoney()
    },
    // 商品的总价格
    getTotalMoney () {
      this.totalMoney = 0
      for (let item of this.tableData) {
        this.totalMoney += item.count * item.price
      }
    },
    // 删除所有的商品
    delAllGoods () {
      this.tableData = []
      this.totalCount = 0
      this.totalMoney = 0
    },
    // 是否直接挂单
    directBill (isDirectBill, tableData, checkObj, checkUserNumber) {
      this.isDirectBill = false
      this.submitCheckList(tableData, checkObj)
      this.checkUserNumber = 0
    },
    // 用户挂单
    submitCheckList (tableData, checkObj) {
      this.checkList.push(checkObj)
      // if (this.checkUserNumber === 0) {
      //   this.checkList.push(checkObj)
      // } else {
      //   for (let item of this.checkList) {
      //     if (item.checkListNumber === this.checkUserNumber) {
      //       item.totalCount = checkObj.totalCount
      //       item.totalMoney = checkObj.totalMoney
      //     }
      //   }
      // }
      console.log('用户挂单编号', this.checkUserNumber, this.isDirectBill)
      this.isCheckList = true
      this.checkListData = tableData
      this.delAllGoods()
    }
  }
}
</script>

<style scoped>
  .pos{
    font-size: 12px;
  }
  /*内容左侧*/
  .pos-order{
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
  }
  /*内容右侧*/
  .goods{
    background-color: #F9EEFF;
  }

</style>
