<template>
  <div>
    <div class = "oftenGoods">
    <div class = "title">常用商品</div>
    <div class="often-goods-list">
      <ul v-for="item in oftenGoods" :key="item.goodsId">
        <li class="good-list"  @click="addOrderList(item)">
          <span>{{item.goodsName}}</span>
          <span class="o-price">￥{{item.price}}元</span>
        </li>
      </ul>
    </div>
  </div>

   <div class="goods-type">
    <el-tabs>
      <el-tab-pane label="汉堡">
        <ul class='cookList'>
          <li v-for="item in type0Goods" :key="item.goodsId" @click="addOrderList(item)" class="good-list">
            <span class="foodName">{{item.goodsName}}</span>
            <span class="foodPrice">￥{{item.price}}元</span>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="小食">
        <ul class='cookList'>
          <li v-for="item in type1Goods" :key="item.goodsId" @click="addOrderList(item)" class="good-list">
            <span class="foodName">{{item.goodsName}}</span>
            <span class="foodPrice">￥{{item.price}}元</span>
          </li>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="饮料">
        <ul class='cookList'>
          <li v-for="item in type2Goods" :key="item.goodsId" @click="addOrderList(item)" class="good-list">
            <span class="foodName">{{item.goodsName}}</span>
            <span class="foodPrice">￥{{item.price}}元</span>
          </li>
        </ul>
      </el-tab-pane>

      <el-tab-pane label="套餐">
        <ul class='cookList'>
          <li v-for="item in type3Goods" :key="item.goodsId" @click="addOrderList(item)" class="good-list">
            <span class="foodName">{{item.goodsName}}</span>
            <span class="foodPrice">￥{{item.price}}元</span>
          </li>
        </ul>
      </el-tab-pane>

    </el-tabs>
  </div>
  </div>
</template>

<script>
export default {
  name: 'goodsList',
  data () {
    return {
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    }
  },
  created () {
    // 读取常用商品列表
    this.axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
      .then(response => {
        // console.log('获取常用商品列表：', response.data)
        this.oftenGoods = response.data
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
    // 读取分类商品列表
    this.axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
      .then(response => {
        // console.log('获取分类商品列表：', response.data)
        this.type0Goods = response.data[0]
        this.type1Goods = response.data[1]
        this.type2Goods = response.data[2]
        this.type3Goods = response.data[3]
      })
      .catch(error => {
        console.log(error)
        alert('网络错误，不能访问')
      })
  },
  methods: {
    // 向外部发送事件，添加商品
    addOrderList (goods) {
      this.$emit('addOrderList', goods)
    }
  }
}
</script>

<style scoped>
  .title{
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    /*background-color: #F9FAFC;*/
    padding: 10px;
    color: #58B7FF;
  }
  .good-list {
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:8px;
    margin:5px;
    background-color:#fff;
  }
  .o-price{
    color:#58B7FF;
  }
  .goods-type{
    clear: both;
    padding: 10px;
  }
</style>
