<template>
    <div>
      <el-table :data = "tableData" border style="width: 100%;" :header-cell-style = "headerCellClassStyle">
        <el-table-column prop = "goodsName" label = "商品"></el-table-column>
        <el-table-column prop = "count" label = "量" width="50"></el-table-column>
        <el-table-column prop = "price" label = "单价" width="70"></el-table-column>
        <el-table-column label = "操作"  width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="deleteGoods(scope.$index)">删除</el-button>
            <el-button type = "text" size = "small" @click = "reduceOrderList(scope.row, scope.$index)">减少</el-button>
            <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="totalDiv margin-bottom-20">
        <small>数量：</small>
        <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
        <small>总计：</small>
        <strong>{{totalMoney}}</strong> 元
      </div>

      <div class="text-center">
        <el-button type="warning" @click="checkList(tableData)">挂单</el-button>
        <el-button type="danger" @click="delAllGoods()">删除</el-button>
        <el-button type="success" @click="checkout()"> 结账</el-button>
        <el-dialog title="用户挂单" :visible.sync="dialogTableVisible">
          <el-input  placeholder="请输入挂单编号"
                     v-model="checkListNumber"
                     type = "number"
                     clearable class = "margin-bottom-20"></el-input>
          <el-button type = "primary" @click="submitCheckList(tableData)">提交</el-button>
        </el-dialog>
      </div>
    </div>
</template>

<script>
export default {
  name: 'orderGoods',
  props: {
    tableData: {
      require: true
    },
    totalCount: {
      require: true
    },
    totalMoney: {
      require: true
    },
    checkUserNumber: {
      default: 0
    },
    isDirectBill: {
      default: false
    }
  },
  data () {
    return {
      checkListNumber: 1,
      dialogTableVisible: false
    }
  },
  methods: {
    // 设置表头
    headerCellClassStyle ({ row, column, rowIndex, columnIndex }) {
      return 'background-color: #F9FAFC;color: #333;font-weight: bold;'
    },
    // 向外部发送事件，删除单个商品
    deleteGoods (index) {
      this.$emit('deleteGoods', index)
    },
    // 添加商品
    addOrderList (goods) {
      this.$emit('addOrderList', goods)
    },
    // 减少商品
    reduceOrderList (goods, index) {
      console.log(goods, index)
      this.$emit('reduceOrderList', goods, index)
    },
    // 删除所有的商品
    delAllGoods () {
      this.$emit('delAllGoods')
    },
    //  结账
    checkout () {
      if (this.totalCount !== 0) {
        this.$message({
          message: '结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        })
        this.delAllGoods()
      } else {
        this.$message.error('不能空结哟。老板了解你急切的心情！')
      }
    },
    //  挂单（用户结账时想起还有东西没有买）
    checkList (tableData) {
      console.log('是否直接挂单：', this.isDirectBill)
      if (this.isDirectBill === true) {
        let checkObj = {
          totalCount: this.totalCount,
          totalMoney: this.totalMoney,
          checkListNumber: this.checkUserNumber
        }
        this.directBill(tableData, checkObj)
        // this.$emit('submitCheckList', tableData, checkObj)
      } else {
        if (tableData.length > 0) {
          this.dialogTableVisible = true
        } else {
          this.$message.error('亲，购入商品后才能挂单呢( • ̀ω•́ )✧')
        }
      }
    },
    // 是否直接挂单
    directBill (tableData, checkObj) {
      this.$emit('isDirectBill', this.isDirectBill, tableData, checkObj, this.checkUserNumber)
    },
    // 点击提交挂单
    submitCheckList (tableData) {
      if (this.checkListNumber > 0 && this.checkListNumber !== '') {
        let checkObj = {
          totalCount: this.totalCount,
          totalMoney: this.totalMoney,
          checkListNumber: this.checkListNumber
        }
        this.$emit('submitCheckList', tableData, checkObj)
        this.checkListNumber++
        this.dialogTableVisible = false
      } else {
        this.$message.error('亲，请填写并打印挂单编号，以免商品弄错哦(ﾉ´▽｀)ﾉ♪')
      }
    }
  }
}
</script>

<style scoped>
  .totalDiv {
    text-align: right;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #E5E9F2;
    padding: 10px;
  }
</style>
