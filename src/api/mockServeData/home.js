// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData:() =>{
    // Mock.Random.float 产生随机数100到8000之间 保留小数，
    for(let i = 0; i <7;i++) {
      List.push(
        Mock.mock({
          苹果:Mock.Random.float(100, 8000, 0, 0),
          vivo:Mock.Random.float(100, 8000, 0, 0),
          oppo:Mock.Random.float(100, 8000, 0, 0),
          魅族:Mock.Random.float(100, 8000, 0, 0),
          三星:Mock.Random.float(100, 8000, 0, 0),
          小米:Mock.Random.float(100, 8000, 0, 0),
        })
      )
    }
    return {
      code:20000,
      data: {
        // 饼图
        videoData:[
          {
            name: '小米',
            value: 2999,
          },
          {
            name: '苹果',
            value: 8999,
          },
          {
            name: 'vivo',
            value: 3999,
          },
          {
            name: 'oppo',
            value: 1999,
          },
          {
            name: '魅族',
            value: 2999,
          },
          {
            name: '三星',
            value: 999,
          },
        ],
        tableData: [
          {
            name:'oppo',
            todayBuy: 100,
            monthBuy:300,
            totalBuy:800
          },
          {
            name:'vivo',
            todayBuy: 100,
            monthBuy:300,
            totalBuy:800
          },
          {
            name:'苹果',
            todayBuy: 100,
            monthBuy:300,
            totalBuy:800
          },
          {
            name:'小米',
            todayBuy: 100,
            monthBuy:300,
            totalBuy:800
          },
          {
            name:'三星',
            todayBuy: 100,
            monthBuy:300,
            totalBuy:800
          },
          {
            name:'魅族',
            todayBuy: 100,
            monthBuy:300,
            totalBuy:800
          }
        ],
        userData:[
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 10,
            active: 500
          },
          {
            date: '周四',
            new: 10,
            active: 500
          },
          {
            date: '周五',
            new: 10,
            active: 500
          },
        ],
        orderData:{
          date: ['20191001', '20200815', '20200815', '20201525', '20181012', '20221201','20130202'],
          data: List
        }
      }
    }
  }
}