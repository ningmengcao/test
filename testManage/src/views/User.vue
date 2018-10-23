<template>
  <div class="padding-20">
    <el-row :gutter="20">
      <!--用户信息列表-->
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <h5 class="h5-title">用户信息列表</h5>
          <el-table style="width: 100%" height="90%"  :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <el-table-column prop="orderNumber" label="序号" width="60"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="weChatName" label="微信昵称" width="200"></el-table-column>
            <el-table-column prop="sex" label="性别" width="60"></el-table-column>
            <el-table-column prop="city" label="城市" width="140"></el-table-column>
            <el-table-column prop="phoneNumber" label="手机号" width="200"></el-table-column>
            <el-table-column prop="careerObjective" label="求职意向" width="200"></el-table-column>
            <el-table-column prop="experience" label="工作经验" width="140"></el-table-column>
            <el-table-column prop="education" label="最高学历" width="120"></el-table-column>
            <el-table-column prop="salaryClaim" label="薪资要求" width="150"></el-table-column>
            <el-table-column prop="authState" label="认证状态" width="80"></el-table-column>
            <el-table-column prop="bindCompany" label="绑定企业" width="80"></el-table-column>
            <el-table-column prop="balance" label="账户余额" width="120"></el-table-column>
          </el-table>
        </div>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :pager-count="7"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          class = "margin-10">
        </el-pagination>

      </el-col>
      <!--用户筛选-->
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <h5 class="h5-title ">用户筛选</h5>
          <UserFilter></UserFilter>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserFilter from '../components/UserFilter'

export default {
  name: 'User',
  components: { UserFilter },
  data () {
    return {
      tableData: [],
      currentPage: 1, // 初始页
      pagesize: 10 // 每页的数据
    }
  },
  mounted () {
    this.getUserInformation()
  },
  methods: {
    getUserInformation () { // 获取用户信息
      this.$axios.get('/mock/user')
        .then(res => {
          console.log('用户信息', res.data)
          this.tableData = res.data.userList
        })
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    }
  }
}

</script>

<style scoped>
  .h5-title {
    padding-top: 20px;
    padding-left: 20px;
    text-align: left;
  }

  /*<!--总览背景分隔-->*/
  .el-row {
    margin-bottom: 20px;
  }

  .bg-purple {
    background-color: #e9e9e9;
  }

  .grid-content {
    border-radius: 4px;
    height: 75vh;
  }

  /*边距大小*/
  .margin-10{
    margin: 10px;
  }
  .padding-20 {
    padding: 20px;
  }
</style>
