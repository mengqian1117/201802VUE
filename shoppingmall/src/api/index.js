//使用axios 请求数据
import axios from "axios"
//配置基础路径
axios.defaults.baseURL="https://www.easy-mock.com/mock/5b20c7b9bf99c32d68c0b6f4/shoppingmall";
axios.interceptors.response.use((res)=>res.data.data);
//首页轮播
export let getSlidesData=()=>{
  return axios.get("/slides");
};
//首页分类导航
export let getCateGoryData=()=>{
  return axios.get("/category");
};
//首页宣传图片
export let getPictureData=()=>{
  return axios.get("/advertesPicture");
};
//首页商品推荐
export let getRecommendData=()=>{
  return axios.get("/recommend");
};
//首页楼层
export let getFloorData=()=>{
  return axios.get("/floor")
};
//首页热卖商品
export let getHotGoodsData=()=>{
  return axios.get("/hotgoods");
};
