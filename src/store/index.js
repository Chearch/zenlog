import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navItems: [
      { name: '首页', path: 'main' },
      { name: '推荐', path: 'recommand' },
      { name: '精选', path: 'feature' },
      { name: '消遣', path: 'entertainment' },
    ],
    searchContent: '', // 导航栏搜索框的内容
    tags: [],        // 用户选择的标签，提供过滤效果
    category: ''     // 分类过滤
  },
  mutations: {
    modifySearchContent(state, option) {
      state.searchContent = option;
    },
    modifyCategory(state, option) {
      state.category = option;
    },
    pushTags(state, option) {
      if(!state.tags.includes(option)){
        state.tags.push(option);
      }
    },
    popTags(state) {
      state.tags.pop()
    },
    clearTags(state) {
      state.tags = [];
    },
    defineTags(state, options) {
      state.tags = options;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    navItems: state => state.navItems,
    searchContent: state => state.searchContent,
    tags: state => state.tags,
    category: state => state.category,
  }
})
