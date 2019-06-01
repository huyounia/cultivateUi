/*
  发送请求接口定义
 */
import ajax from './ajax'
const BASE_URL = 'http://localhost:4000'
// 1、根据经纬度获取位置详情
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`,{});


