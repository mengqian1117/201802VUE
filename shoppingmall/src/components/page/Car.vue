<template>
  <div>
    <!--编辑头部有没有取决于 goods的length  初始是 编辑-->
    <div class="editor-head" v-if="goods||goods.length">
      <div @click="isEditor=!isEditor">
        <van-icon :name="isEditor?'success':'editor'"></van-icon>
        <span>{{isEditor?"完成":"编辑"}}</span>
      </div>
    </div>

    <div class="goods-list">
      <!--checkGoods 这个数组放着所有选中的商品-->
      <van-checkbox-group v-model="checkGoods">
        <div v-for="item in goods" class="goods-card">
          <van-checkbox :disabled="!item.status" :name="item"></van-checkbox>
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="item.price"
            :thumb="item.thumb"
          >
            <div slot="footer" v-if="!isEditor">
              <p v-if="item.date">{{item.date}}</p>
              <p v-else>2018-6-14</p>
            </div>
            <div slot="footer" v-if="isEditor">
              <!--disableInput 不可以填写-->
              <van-stepper v-model="item.num" disableInput></van-stepper>
            </div>
          </van-card>
          <div class="goods-delete" v-if="isEditor" @click="goodsDelete(item.id)">删除</div>
        </div>
      </van-checkbox-group>
    </div>

    <div class="clear-goods" v-if="isClear" @click="clearGoods">
      <van-icon name="lajitong"></van-icon>
      清除失效商品
    </div>

    <van-submit-bar
      currency="¥"
      :disabled="!checkGoods.length"
      :price="priceAll*100"
      :button-text="isEditor?'删除':'结算'"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>


    <tabBar :active="2"></tabBar>
  </div>

</template>

<script>
  import tabBar from "../base/tabBar.vue"

  export default {
    name: "Car",
    data() {
      return {
        goods: [
          {
            id: '1',
            title: '进口香蕉',
            desc: '约250g，2根',
            price: 200,
            status: 0,//状态 0 失效商品
            num: 1,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
          }, {
            id: '2',
            title: '陕西蜜梨',
            desc: '约600g',
            price: 690,
            status: 1,
            num: 3,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
          }, {
            id: '3',
            title: '美国伽力果',
            desc: '约680g/3个',
            price: 2680,
            status: 1,
            num: 1,
            thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
          }],
        isEditor: false,
        checkGoods: [],
      }
    },
    components: {tabBar},
    methods:{
      goodsDelete(id){
        this.$dialog.confirm({
          title:"你确定要删除吗"
        }).then(()=>{
          this.goods=this.goods.filter(item=>item.id!=id);
        },()=>{});
      },
      clearGoods(){
        //留下状态是1的
        this.goods=this.goods.filter(item=>item.status);
      },
      onSubmit(){
        //2个作用 删除,结算
        //根据状态(isEditor)不同处理不同的操作
        if(this.isEditor){
          //删除 当前item 不再选中的数组(checkGoods)中就留下
          this.goods=this.goods.filter(item=>{
            let is=!this.checkGoods.includes(item);
            this.checkGoods=this.checkGoods.filter(val=>val!=item);
            return is;
          });
        }else {
          //结算
        }
      },
    },
    computed:{
      isClear(){
        return this.goods.some(item=>!item.status);
      },
      priceAll(){
        //checkGoods 数组中的商品总价格
        return this.checkGoods.reduce((prev,item)=> prev+item.price*item.num,0)
      },
      checked:{
        get(){
          //checkGoods 的length== 不失效的(status是1的个数)
          let count= this.goods.reduce((prev,item)=>prev+Number(item.status),0);
          return this.checkGoods.length==count;
        },
        set(val){
          if(val){
            this.checkGoods=this.goods.filter(item=>item.status);
          }else {
            this.checkGoods=[];
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .editor-head {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding: 0.2rem;
    text-align: right;
  }

  .goods-card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .van-checkbox {
      text-align: center;
      width: 1rem;
    }
    .van-card{
      flex: 1;
      background-color: #fff;
    }
    .goods-delete{
      background-color: red;
      color: #fff;
      line-height: 1.8rem;
    }
  }
  .clear-goods{
    text-align: center;
    border: 1px solid #ccc;
    padding: 0.1rem 0.3rem;
    width:3rem;
    margin: 0.6rem auto;
  }

  .van-submit-bar{
    bottom: 1rem;
  }
</style>
