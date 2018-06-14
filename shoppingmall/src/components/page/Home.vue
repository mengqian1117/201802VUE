<template>
  <div class="container">
    <div class="home-search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入商品名称"
          show-action
          @search="onSearch"
          @cancel="onCancel"

        />
      </form>
    </div>
    <div class="home-swipe">
      <slides :slides="slides"></slides>
    </div>
    <div class="category">
      <div v-for="item in category">
        <img :src="item.image" alt="" width="100%">
        <p>{{item.mallCategoryName}}</p>
      </div>
    </div>
    <div class="picture">
      <img :src="picture.PICTURE_ADDRESS" alt="" width="100%">
    </div>
    <div class="recommend">
      <h3>商品推荐</h3>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in recommend" :key="index">
          <div class="slide-item">
            <img :src="slide.image" alt="" width="80%">
            <p>{{slide.goodsName}}</p>
            <p>¥{{slide.mallPrice|toFixed}}({{slide.price|toFixed}})</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <floor :floor="floor"></floor>
    <div>
      <h3 class="hot-title">热卖商品</h3>
      <div class="hotGoods" >
        <div class="goods" v-for="item in hotGoods" @click="$router.push({params:{goodsId:item.goodsId},name:'detail'})">
          <img :src="item.image" width="100%">
          <p>{{item.name}}</p>
          <p>¥{{item.mallPrice|toFixed}}({{item.price|toFixed}})</p>
        </div>
      </div>
    </div>

    <tabBar :active="0"></tabBar>

  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import {getSlidesData,getFloorData,getRecommendData,getHotGoodsData,getCateGoryData,getPictureData} from "../../api";
  import slides from "../base/slides.vue"
  //导入样式 和 组件
  import "swiper/dist/css/swiper.css"
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  import floor from "../base/floor.vue"
  export default {
    name: "Home",
    data(){
      return{
        swiperOption:{slidesPerView:3},
        slides:  [{
          "image": "https://img.alicdn.com/tfs/TB1B143uv5TBuNjSspmXXaDRVXa-520-280.jpg_q90_.webp",
          "goodsId": "2199b4bb56d247a1b044d5e7d902c942"
        }, {
          "image": "https://img.alicdn.com/simba/img/TB1ck7Mr.R1BeNjy0FmSuv0wVXa.jpg",
          "goodsId": "91a849140de24546b0de9e23d85399a3"
        }, {
          "image": "https://img.alicdn.com/tfs/TB1hSUbuv9TBuNjy0FcXXbeiFXa-520-280.jpg_q90_.webp",
          "goodsId": "c68a7668cceb4168ab48ae0aa312a67d"
        }],
        value:"酸奶",
        category:[
          {
            "mallCategoryId": "1",
            "mallCategoryName": "营养快餐",
            "bxMallSubDto": [{
              "mallSubId": "2c9f6c946016ea9b016016f79c8e0000",
              "mallCategoryId": "1",
              "mallSubName": "热带水果",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016db9b290001",
              "mallCategoryId": "1",
              "mallSubName": "苹果/梨",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dbff2f0002",
              "mallCategoryId": "1",
              "mallSubName": "柑橘橙柚",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dc55bf0003",
              "mallCategoryId": "1",
              "mallSubName": "蓝莓草莓",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dcd7c50004",
              "mallCategoryId": "1",
              "mallSubName": "葡萄提子",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016de3b100008",
              "mallCategoryId": "1",
              "mallSubName": "净菜",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dd052e0005",
              "mallCategoryId": "1",
              "mallSubName": "瓜类",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dd339c0006",
              "mallCategoryId": "1",
              "mallSubName": "鲜果切",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016de0d400007",
              "mallCategoryId": "1",
              "mallSubName": "叶菜",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016de85870009",
              "mallCategoryId": "1",
              "mallSubName": "根茎类",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016dec183000a",
              "mallCategoryId": "1",
              "mallSubName": "菌菇类",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/cy_2x_db5d2fb.png"
          }, {
            "mallCategoryId": "2",
            "mallCategoryName": "营养早餐",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016deffa0000b",
              "mallCategoryId": "2",
              "mallSubName": "猪肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016df1f92000c",
              "mallCategoryId": "2",
              "mallSubName": "牛肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016df3d1f000d",
              "mallCategoryId": "2",
              "mallSubName": "羊肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016df7c0e000e",
              "mallCategoryId": "2",
              "mallSubName": "鸡鸭禽肉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e0241d000f",
              "mallCategoryId": "2",
              "mallSubName": "鲜蛋蛋品",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e083f10010",
              "mallCategoryId": "2",
              "mallSubName": "火锅肉片",
              "comments": null
            }, {
              "mallSubId": "2c9f6c9460337d540160337fefd60000",
              "mallCategoryId": "2",
              "mallSubName": "水产",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/zc_2x_2eb8681.png"
          }, {
            "mallCategoryId": "3",
            "mallCategoryName": "营养鲜果",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016e135440011",
              "mallCategoryId": "3",
              "mallSubName": "鲜奶",
              "comments": ""
            }, {
              "mallSubId": "402880e86016d1b5016016e171cc0012",
              "mallCategoryId": "3",
              "mallSubName": "酸奶",
              "comments": ""
            }, {
              "mallSubId": "402880e86016d1b5016016e240e60013",
              "mallCategoryId": "3",
              "mallSubName": "乳酸菌",
              "comments": ""
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/sgsx_2x_7cd0567.png"
          }, {
            "mallCategoryId": "4",
            "mallCategoryName": "飘香茶饮",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016e2dcc80016",
              "mallCategoryId": "4",
              "mallSubName": "调味料",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e38a3a0017",
              "mallCategoryId": "4",
              "mallSubName": "健康杂粮",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e3aa370018",
              "mallCategoryId": "4",
              "mallSubName": "干货",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e3d09d0019",
              "mallCategoryId": "4",
              "mallSubName": "方便速食",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e3f70c001a",
              "mallCategoryId": "4",
              "mallSubName": "罐头酱菜",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e42c22001b",
              "mallCategoryId": "4",
              "mallSubName": "米面粉",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e458ca001c",
              "mallCategoryId": "4",
              "mallSubName": "烹饪油",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/xwc_2x_274d685.png"
          }, {
            "mallCategoryId": "5",
            "mallCategoryName": "零食饮料",
            "bxMallSubDto": [{
              "mallSubId": "402880e86016d1b5016016e4ac16001d",
              "mallCategoryId": "5",
              "mallSubName": "坚果炒货",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e4dca2001e",
              "mallCategoryId": "5",
              "mallSubName": "风味小食",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e51380001f",
              "mallCategoryId": "5",
              "mallSubName": "膨化食品",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e549710020",
              "mallCategoryId": "5",
              "mallSubName": "饮用水",
              "comments": ""
            }, {
              "mallSubId": "402880e86016d1b5016016e62bbd0021",
              "mallCategoryId": "5",
              "mallSubName": "碳酸饮料",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e656c50022",
              "mallCategoryId": "5",
              "mallSubName": "果蔬汁",
              "comments": null
            }, {
              "mallSubId": "2c9f6c946016f86f01601709335d0000",
              "mallCategoryId": "5",
              "mallSubName": "乳制饮料",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e67b790023",
              "mallCategoryId": "5",
              "mallSubName": "啤酒",
              "comments": null
            }, {
              "mallSubId": "402880e86016d1b5016016e713540024",
              "mallCategoryId": "5",
              "mallSubName": "白/黄/果酒",
              "comments": null
            }, {
              "mallSubId": "2c9195006076dbc50160781e03bf0013",
              "mallCategoryId": "5",
              "mallSubName": "咖啡茶饮",
              "comments": null
            }],
            "comments": null,
            "image": "https://static.waimai.baidu.com/static/mwaimai/images/jingang/csg_2x_bf4d21e.png"
          }],
        recommend: [
          {
            "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t21181/169/500603366/152999/23213bf2/5b0f6198N8ccf16da.jpg!q70.jpg.dpg",
            "mallPrice": 178,
            "goodsId": "7c75078bfc7746b2a57a0fa4b0933d4a",
            "price": 446,
            "goodsName": "豪华水杯"
          }, {
            "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t17203/127/1922456285/232847/153db91b/5adff20fN48d1dab2.jpg!q70.jpg.dpg",
            "mallPrice": 7.9,
            "goodsId": "9f0fc88cbd5948a4a18d575f15710e62",
            "price": 9,
            "goodsName": "开心玩具 1*2(约750g)"
          }, {
            "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t20377/106/457116951/186911/3ded07a1/5b0e967fN58f5a858.jpg!q70.jpg.dpg",
            "mallPrice": 24,
            "goodsId": "c68a7668cceb4168ab48ae0aa312a67d",
            "price": 28,
            "goodsName": "高邮咸鸭蛋1*2（约1200g）"
          }, {
            "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t21166/40/459543171/149874/eec623b0/5b0e4624N6af94eb5.jpg!q70.jpg.dpg",
            "mallPrice": 24,
            "goodsId": "c68a7668cceb4168ab48ae0aa312a67d",
            "price": 28,
            "goodsName": "最爱零食板栗1*2（约1200g）"
          }, {
            "image": "https://m.360buyimg.com/mobilecms/s220x220_jfs/t21640/134/461270574/190159/c87badcc/5b0e741cN12466a4c.jpg!q70.jpg.dpg",
            "mallPrice": 24,
            "goodsId": "c68a7668cceb4168ab48ae0aa312a67d",
            "price": 28,
            "goodsName": "居家收纳1*2（约1200g）"
          }],
        hotGoods: [
          {
            "mallPrice": 12,
            "image": "https://m.360buyimg.com/babel/s219x219_jfs/t4915/129/879943270/380639/189588a0/58e9cd0fN1e88bdeb.jpg!q70.dpg",
            "goodsId": "22fece1309b547069fedb8bfd4a9a855",
            "price": 15,
            "name": "越南火龙果（大）1*2(约1000g)"
          }, {
            "mallPrice": 24,
            "image": "https://m.360buyimg.com/babel/jfs/t2605/152/4094328248/200600/37296076/57ab290aN34f76b37.jpg!q70.dpg",
            "goodsId": "c68a7668cceb4168ab48ae0aa312a67d",
            "price": 28,
            "name": "越南红心火龙果1*2（约1200g）"
          }, {
            "mallPrice": 69,
            "image": "https://m.360buyimg.com/babel/jfs/t17554/181/1933425811/324097/82959850/5add5799N144bf05e.jpg!q70.dpg",
            "goodsId": "27f616c8ec0346a6ae7a3667da2ac345",
            "price": 75,
            "name": "多宝鱼 1.5斤左右"
          }, {
            "mallPrice": 599,
            "image": "https://m.360buyimg.com/babel/jfs/t18172/100/758100710/392419/a8f38030/5aa73d2eN1daf360c.jpg!q70.dpg",
            "goodsId": "f0bc788839ab4ef6ac2adbaa4d8b6074",
            "price": 650,
            "name": "阿拉斯加帝王蟹 3斤左右"
          }, {
            "mallPrice": 69,
            "image": "https://m.360buyimg.com/babel/jfs/t18778/147/1269364902/376514/a72bc761/5ac509e5Nb5710d58.jpg!q50.jpg.webp",
            "goodsId": "06cdf782f37c41b3b4b93e92999c483c",
            "price": 80,
            "name": "面包蟹 400g"
          }, {
            "mallPrice": 30,
            "image": "https://m.360buyimg.com/babel/jfs/t7303/200/4596411910/388738/122372d8/5a054e77N61475576.jpg!q70.dpg",
            "goodsId": "f6e283eb6df44637ae3d0c83e8bd04cd",
            "price": 38,
            "name": "虾夷扇贝 10个/份"
          }, {
            "mallPrice": 199,
            "image": "https://m.360buyimg.com/babel/s235x235_jfs/t21451/290/853092354/399243/e2ca419a/5b193270N48793ff6.jpg!q50.jpg.webp",
            "goodsId": "2199b4bb56d247a1b044d5e7d902c942",
            "price": 258,
            "name": "波士顿活龙虾 1.5斤左右"
          }, {
            "mallPrice": 59.8,
            "image": "https://m.360buyimg.com/babel/s235x235_jfs/t18397/200/1964246848/312928/3f5989f/5adec8b4N609ab1cd.jpg!q50.jpg.webp",
            "goodsId": "24692e32d27241d095bbfc59106a4229",
            "price": 60,
            "name": "蓝雪阿根廷红虾500g"
          }, {
            "mallPrice": 5.9,
            "image": "https://m.360buyimg.com/babel/jfs/t7549/262/2764466495/1254270/719acbc5/59b5e581N7bb5d2f3.jpg!q70.dpg",
            "goodsId": "51a1bd1b303e4bd1a97207d87fc1679e",
            "price": 11.96,
            "name": "河北皇冠梨 1*4(约1000g)"
          }, {
            "mallPrice": 7.9,
            "image": "https://m.360buyimg.com/babel/jfs/t3049/326/4875061308/594623/37c45385/585a2bb3N7e2b13a0.jpg!q50.jpg.webp",
            "goodsId": "9f0fc88cbd5948a4a18d575f15710e62",
            "price": 9,
            "name": "会理石榴 1*2(约750g)"
          }, {
            "mallPrice": 12.5,
            "image": "https://m.360buyimg.com/babel/jfs/t15715/236/2264691970/352267/214e1243/5a98b7c8N78cb83e5.jpg!q70.dpg",
            "goodsId": "b919351e5c2b4a3b9c6791d296934c32",
            "price": 15,
            "name": "福建红肉蜜柚 1*2(约1900g)"
          }, {
            "mallPrice": 0.1,
            "image": "https://m.360buyimg.com/babel/jfs/t4531/149/3228740023/251665/6efd9f73/58f9b7f4Ne190ce34.jpg!q70.dpg",
            "goodsId": "9f30e1eff327400d8ad961d0e91b0ecd",
            "price": 14,
            "name": "四川不知火丑桔 1*4(约1000g)"
          }, {
            "mallPrice": 10,
            "image": "https://m.360buyimg.com/babel/jfs/t2977/138/2111174449/437408/68c9c579/579c50c0N9017e5a3.jpg!q50.jpg.webp",
            "goodsId": "6a2a46ff7657441eaa6ccc6136988da3",
            "price": 12,
            "name": "海南木瓜 1*1(约1000g)"
          }, {
            "mallPrice": 7.9,
            "image": "https://m.360buyimg.com/babel/jfs/t16810/76/1670125231/319363/96928b7f/5ad5b726N09158925.jpg!q50.jpg.webp",
            "goodsId": "bedfd4bc4d5d46cea41f10355a702a58",
            "price": 9,
            "name": "君乐宝纯享原味发酵乳330g"
          }, {
            "mallPrice": 10,
            "image": "https://m.360buyimg.com/babel/jfs/t18217/111/1638828905/244053/345647c3/5ad5b7f1N54840ec1.jpg!q70.dpg",
            "goodsId": "cb3695e66bdc4ac48c5d1d0f28af18dc",
            "price": 46,
            "name": "完达山炭烧酸奶180g*16袋/箱"
          }, {
            "mallPrice": 5.5,
            "image": "https://m.360buyimg.com/babel/s317x317_jfs/t16621/71/1825907718/88817/db785100/5ad8629eN75d3cb31.jpg!q50.jpg.webp",
            "goodsId": "0ab2a0cbb439407e8f90d558a070428d",
            "price": 5.5,
            "name": "蒙牛纯甄经典原味酸牛奶200g"
          }, {
            "mallPrice": 22.9,
            "image": "https://m.360buyimg.com/babel/jfs/t6721/176/2670686590/157452/6a3ad575/5965a0e8N9a1b7b91.jpg!q70.dpg",
            "goodsId": "3df3bf7632f74433bf54a1acc5358b42",
            "price": 26,
            "name": "北大荒绿野有机红小豆390g"
          }, {
            "mallPrice": 13.8,
            "image": "https://m.360buyimg.com/babel/s199x199_jfs/t14590/127/1324357439/253932/f2b3f66c/5a4c6075Nca15a4e3.jpg!q70.dpg",
            "goodsId": "2ae28f2ec5f14e9e9f29dfbff0fb10d4",
            "price": 16,
            "name": "思念手打天下猪肉香菇水饺495g"
          }, {
            "mallPrice": 8.6,
            "image": "https://m.360buyimg.com/babel/s235x235_jfs/t18277/87/1680538695/175853/1c923a64/5ad45d3eN9959f408.jpg!q70.dpg",
            "goodsId": "2a4763fa31cb457481737b9ede14f841",
            "price": 10.5,
            "name": "双汇大肉块俄式风味香肠30g*8"
          }, {
            "mallPrice": 53.8,
            "image": "https://m.360buyimg.com/babel/jfs/t4984/221/273702146/222474/75867910/58ddc7eaN74a71a71.jpg!q70.dpg",
            "goodsId": "2c8ad2805463498592910919e4d51260",
            "price": 58,
            "name": "金健东北贡米5kg"
          }],
        floor: [
          {
            "goodsId": "24692e32d27241d095bbfc59106a4229",
            "image": "https://img.alicdn.com/tps/i4/TB1F61TmiCYBuNkHFCcSuwHtVXa.jpg_400x400Q50s50.jpg_.webp"
          }, {
            "goodsId": "27f616c8ec0346a6ae7a3667da2ac345",
            "image": "https://img.alicdn.com/tps/i4/TB1Vu_BuFOWBuNjy0FiSutFxVXa.jpg_790x420Q50s50.jpg_.webp"
          }, {
            "goodsId": "f6e283eb6df44637ae3d0c83e8bd04cd",
            "image": "https://img.alicdn.com/tps/i4/TB1WY2guHGYBuNjy0FoSuwiBFXa.jpg_790x420Q50s50.jpg_.webp"
          }, {
            "goodsId": "06cdf782f37c41b3b4b93e92999c483c",
            "image": "https://img.alicdn.com/simba/img/TB1jhQEuNSYBuNjSsphSuvGvVXa.jpg_270x270Q75s50.jpg_.webp"
          }, {
            "goodsId": "2199b4bb56d247a1b044d5e7d902c942",
            "image": "https://img.alicdn.com/simba/img/TB1kudRa.D.BuNjt_h7SuuNDVXa.jpg_270x270Q75s50.jpg_.webp"
          }, {
            "goodsId": "f0bc788839ab4ef6ac2adbaa4d8b6074",
            "image": "https://img.alicdn.com/imgextra/i2/3467980192/TB2R6UGukOWBuNjSsppXXXPgpXa_!!3467980192.jpg_270x270Q75s50.jpg_.webp"
          }, {
            "goodsId": "06cdf782f37c41b3b4b93e92999c483c",
            "image": "https://img.alicdn.com/simba/img/TB1jhQEuNSYBuNjSsphSuvGvVXa.jpg_270x270Q75s50.jpg_.webp"
          }, {
            "goodsId": "2199b4bb56d247a1b044d5e7d902c942",
            "image": "https://img.alicdn.com/simba/img/TB1kudRa.D.BuNjt_h7SuuNDVXa.jpg_270x270Q75s50.jpg_.webp"
          }, {
            "goodsId": "f0bc788839ab4ef6ac2adbaa4d8b6074",
            "image": "https://img.alicdn.com/imgextra/i2/3467980192/TB2R6UGukOWBuNjSsppXXXPgpXa_!!3467980192.jpg_270x270Q75s50.jpg_.webp"
          }],
        picture: {
          "PICTURE_ADDRESS": "http://images.baixingliangfan.cn/advertesPicture/20180105/20180105115136_8151.gif"
        }
      }
    },
    components:{
      tabBar,slides,swiper,swiperSlide,floor
    },
    created(){
     //this.getData();
      console.log(this.floor, this.hotGoods);
  },
  methods:{
    onSearch(){},
      onCancel(){},
      async getData(){
        this.slides=(await getSlidesData()).slides ;
        this.category=(await getCateGoryData()).category;
        this.picture=(await getPictureData()).advertesPicture;
        this.recommend=(await getRecommendData()).recommend;
        this.floor=(await getFloorData()).floor;
        this.hotGoods=(await getHotGoodsData()).hotGoods;
        console.log(this.category, this.picture, this.recommend, this.floor, this.hotGoods);
      }
    }
  }
</script>

<style scoped lang="less">
  .container{
    background-color: #bbbbbb38;
  }
  .van-swipe{
    max-height: 3.6rem;
  }
  .category{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 0.2rem;
    background-color: #fff;
    padding-top:0.2rem ;;
    div{
      width: 20%;
      margin: 0 10px;
      p{
        text-align: center;
        font-size: 0.2rem;
      }
    }
  }
  .picture{
    margin-bottom: 0.2rem;
  }
  .recommend{
    background-color: #fff;
    h3{
      border-bottom: 1px solid #ddd;
      margin: 0;
      color: #e11488;
      padding: 0.1rem;
      box-sizing: border-box;
    }
    .slide-item{
      box-sizing: border-box;
      padding: 0.1rem;
      text-align: center;
      font-size: 12px;
      border-right: 1px solid #ddd;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

    }
  }
  .hotGoods{
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .goods{
      text-align: center;
      margin: 0 5%;
      width: 40%;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .hot-title{
    color: orangered;
    text-align: center;
  }
</style>
