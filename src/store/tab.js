export default{
  state:{
    isCollapse:false, //控制菜单的展开还是收起
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home"
      }
    ]    //面包屑数据
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      // 判断添加的数据是否为首页
      if(val.name !== 'home') {
        const index = state.tabsList.findIndex(item => item.name === val.name)
        // 如果不存在
        if(index === -1) {
          state.tabsList.push(val)
        }
      }
    },
    // 删除指定的tag数据
    closeTag(state, item) {
      const index = state.tabsList.findIndex(val => val.name === item.name)
      state.tabsList.splice(index, 1)
    }
  }
}