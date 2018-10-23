<!--suppress ALL -->
<template>
  <div class="padding-10">
    <el-row :gutter="20">
      <el-col :span="10" class="dis-inline-flex">
        <span class="width-70 line-height-40 margin-right-10">姓名</span>
        <el-input placeholder="姓名" v-model ="userFilter.name" />
      </el-col>
      <el-col :span="14" class="dis-inline-flex">
        <span class="width-130 line-height-40 margin-right-10">微信昵称</span>
        <el-input placeholder="微信昵称" v-model ="userFilter.weChatName"/>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12" class="dis-inline-flex">
        <span class="width-70 line-height-40 margin-right-10">手机</span>
        <el-input placeholder="输入手机号" v-model="userFilter.phone" />
      </el-col>
      <el-col :span="12" class="dis-inline-flex">
        <span class="width-70 line-height-40 margin-right-10">性别</span>
        <el-select v-model="sexSelect.label" placeholder="请选择">
          <el-option
            v-for="item in sexSelect"
            :key="item.value"
            :value="item.label">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span = "24"  class="dis-inline-flex">
       <span class="width-130 line-height-40 margin-right-10 text-left">身份证号</span>
       <el-input placeholder="输入身份证号" v-model ="userFilter.IDcard"/>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="dis-inline-flex">
        <span class="width-130 line-height-40 margin-right-10 text-left">工作经验</span>
        <el-select v-model="userFilter.expSelect" placeholder="请选择">
          <el-option
            v-for="item in expSelect"
            :key="item.text"
            :value="item.text">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="dis-inline-flex">
        <span class="width-130 line-height-40 margin-right-10 text-left">最高学历</span>
        <el-select v-model="userFilter.eduSelect" placeholder="请选择">
          <el-option
            v-for="item in expSelect"
            :key="item.text"
            :value="item.text">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="dis-inline-flex">
        <el-checkbox-group v-model="userFilter.checkList">
          <el-checkbox label="身份已认证"></el-checkbox>
          <el-checkbox label="身份未认证"></el-checkbox>
          <el-checkbox label="有关联企业"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-button class ="bg-909399" @click="reset">重置</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="bg-409EFF" @click="filter">筛选</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'UserFilter',
  data () {
    return {
      userFilter: { // 用户筛选表单
        name: '',
        weChatName: '',
        phone: '',
        IDcard: '',
        expSelect: '',
        eduSelect: '',
        checkList: []
      },
      sexSelect: [ // 性别
        {value: '选项1', label: '不限'},
        {value: '选项2', label: '男'},
        {value: '选项3', label: '女'}],
      expSelect: [ // 工作经验
        {min: 0, max: 0, text: '应届生'},
        {min: 1, max: 3, text: '1 - 3年'},
        {min: 3, max: 5, text: '3 - 5年'},
        {min: 5, max: 10, text: '5 - 10年'},
        {min: 10, max: 100, text: '10年以上'},
        {min: 0, max: 100, text: '不限'}],
      eduSelect: [// 最高学历筛选项
        {education: 1, min: 0, max: 1, text: '高中及以下'},
        {education: 2, min: 2, max: 2, text: '大专'},
        {education: 3, min: 3, max: 3, text: '本科'},
        {education: 4, min: 4, max: 4, text: '研究生'},
        {education: 5, min: 5, max: 5, text: '博士'},
        {education: 0, min: 0, max: 100, text: '不限'}],
      checkList: []
    }
  },
  methods: {
    reset () {
      this.userFilter = {}
    },
    filter () {
      console.log('用户筛选')
    }
  }
}
</script>

<style scoped>
  /*分隔样式*/
  .bg-909399{
    background-color: #909399;
  }
 .bg-409EFF{
  background-color: #409EFF;
 }
 .el-button{
   color: white;
 }
  .el-row {
    margin-bottom: 20px;
  }
  /*宽度、高度样式*/
  .line-height-40 {
    line-height: 40px;
  }

  .width-130 {
    width: 130px;
  }

  .width-70 {
    width: 70px;
  }

  /*字体样式*/
  .font-size-12 {
    font-size: 10px;
  }

  /*边距样式*/
  .margin-right-10{
    margin-right: 10px;
  }
  .padding-10 {
    padding: 10px;
  }
</style>
