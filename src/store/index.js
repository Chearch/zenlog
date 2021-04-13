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
    searchContent: '',  // 导航栏搜索框的内容
    searchResult: '',   // 导航栏搜索结果
    tags: [],           // 用户选择的标签，提供过滤效果
    category: '',       // 分类过滤
    articles: [],       // 文章数目
    limit: 8,           // 文章limit
    currentArticle: '', // 当前打开的文章
    selectTimeLine: '', // 选中的timeline
    friendLink: [       // 友情链接
      { title: '云芒的博客', link: 'https://ymlog.com' },
      { title: '面向信仰编程', link: 'https://draveness.me/' },
      { title: '美团技术团队', link: 'https://tech.meituan.com/' },
      { title: '张鑫旭', link: 'https://www.zhangxinxu.com/wordpress/' },
      { title: 'CoolShell', link: 'https://coolshell.cn/featured' },
    ],
  },
  mutations: {
    modifySearchContent(state, option) {
      state.searchContent = option;
    },
    modifyCategory(state, option) {
      state.category = option;
    },
    pushTags(state, option) {
      if (!state.tags.includes(option)) {
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
    },
    modifyArticles(state, options) {
      state.articles = options;
    },
    setCurrentArticle(state, options) {
      state.currentArticle = options;
    },
    setSelectTimeLine(state, options) {
      state.selectTimeLine = options;
    },
    setSearchResult(state,options){
      state.searchResult = options;
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
    articles: state => state.articles,
    limit: state => state.limit,
    friendLink: state => state.friendLink,
    currentArticle: state => state.currentArticle,
    selectTimeLine: state => state.selectTimeLine,
    searchResult: state => state.searchResult,
  },
})
