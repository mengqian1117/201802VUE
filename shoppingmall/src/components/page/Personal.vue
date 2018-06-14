<template>
  <div class="container">
    <div class="base-info">
      <div class="user-look">
        <img :src="userLook" alt="">
      </div>
      <div class="user-name">
        <p>我是快乐的小猴子</p>
        <p>普通用户</p>
      </div>
      <van-icon name="setting" class="icon-set"></van-icon>
    </div>
    <div class="my-order">
      <van-cell-group>
        <van-cell title="我的订单" is-link value="全部订单" to="/order/all"/>
        <van-row class="order-list">
          <!--不可以给组件绑定真实事件-->
          <div @click="$router.push({name:'order',params:{type:'daifukuan'}})">
            <van-col span="6">
              <div>
                <van-icon name="daifukuan"></van-icon>
              </div>
              <p>待付款</p>
            </van-col>
          </div>
          <div @click="$router.push('/order/daifahuo')">
            <van-col span="6">
              <div>
                <van-icon name="daifahuo"></van-icon>
              </div>
              <p>待发货</p>
            </van-col>
          </div>
          <div @click="$router.push('/order/wuliu')">
            <van-col span="6">
              <div>
                <van-icon name="wuliu" info="3"></van-icon>
              </div>
              <p>待收货</p>
            </van-col>
          </div>
          <div @click="$router.push('/order/shouhouguanli')">
            <van-col span="6">
              <div>
                <van-icon name="shouhouguanli"></van-icon>
              </div>
              <p>退款售后</p>
            </van-col>
          </div>
        </van-row>
      </van-cell-group>
    </div>
    <div class="my-card">
      <van-cell-group>
        <van-cell title="我的电子券" is-link value="全部电子券"/>
        <van-row class="card-list">
          <van-col span="8">
            <div>
              <van-icon name="coupon"></van-icon>
            </div>
            <p>待使用</p>
          </van-col>
          <van-col span="8">
            <div>
              <van-icon name="coupon-used"></van-icon>
            </div>
            <p>已使用</p>
          </van-col>
          <van-col span="8">
            <div>
              <van-icon name="coupon-due"></van-icon>
            </div>
            <p>过期关闭</p>
          </van-col>
        </van-row>
      </van-cell-group>
    </div>
    <div class="my-module">
      <van-cell-group>
        <van-cell title="我的收藏" icon="shoucang" is-link/>
        <van-cell title="我的团队" icon="team" is-link/>
        <van-cell title="我的金豆" icon="gold-bean" is-link/>
        <van-cell title="收获地址" icon="dingwei" is-link/>
        <van-cell title="实名认证" icon="id-card" is-link/>
      </van-cell-group>
    </div>
    <tabBar :active="3"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import userLook from "../../assets/images/avatar_default.png"

  export default {
    name: "Personal",
    data() {
      return {
        userLook,
      }
    },
    components: {tabBar},
    methods: {}
  }
</script>

<style scoped lang="less">
  .van-col {
    text-align: center;
  }

  .van-cell:not(:last-child)::after {
    left: 0;
  }

  .container {
    background-color: #dddddd38;
    .base-info {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      box-sizing: border-box;
      padding: 0.6rem 0.8rem;
      background-color: #ffec78;
      .user-look {
        width: 1.5rem;
        height: 1.5rem;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      .user-name {
        margin-left: 0.5rem;
        font-size: 16px;
        p:nth-child(2) {
          font-weight: bold;
        }
      }
      i.icon-set {
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
        font-size: 24px;
        color: aliceblue;
      }
    }
    .my-order {
      margin: 0.2rem 0;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;
      box-sizing: border-box;
      .order-list {
        padding: 0.2rem;
        box-sizing: border-box;
      }
      i.van-icon {
        font-size: 0.5rem;
      }
    }
    .my-card {
      margin: 0.2rem 0;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;
      box-sizing: border-box;
      .card-list {
        padding: 0.2rem;
        box-sizing: border-box;
      }
      i.van-icon {
        font-size: 0.5rem;
      }
    }
  }
</style>
