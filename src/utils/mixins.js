import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import axios from 'axios'
const flag = true;

export default {
    computed: {
        ...mapGetters([
            'navItems',
            'searchContent',
            'tags',
            'category',
            'articles',
            'limit',
            'friendLink',
            'currentArticle',
            'selectTimeLine',
        ])
    },

    methods: {
        ...mapMutations([
            'modifySearchContent',
            'pushTags',
            'modifyCategory',
            'popTags',
            'clearTags',
            'defineTags',
            'modifyArticles',
            'setCurrentArticle',
            'setSelectTimeLine',
        ]),

        // 跳转到指定路由
        jumpto(pathName) {
            let path = "/" + pathName;
            console.log('jumpto ',path);
            if (this.$route.fullPath !== path) {
                this.$router.push({
                    path
                });
            }
        },
        // 跳转到指定链接
        linkTo(href) {
            window.open(href);
        },
        // 跳转路由
        showArticle(articleId){
            this.$router.push({path: '/article?id='+articleId});
        },
        // 获取当前时间
        getNowTime() {
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let hour = d.getHours();
            let minute = d.getMinutes();
            let second = d.getSeconds();
            return [year, month + 1, day, hour, minute, second]
        },
        // 返回上层
        goback(){
            this.$router.go(-1);
        },
        info(msg) {
            if (typeof msg !== 'string') {
                throw new Error("msg must be string")
            }
            let styles = ['color: orange', 'background: white', 'font-weight: 900'].join(';');
            flag ? console.log('%c%s', styles, msg) : null;
        },
        error(msg) {
            if (typeof msg !== 'string') {
                throw new Error("msg must be string")
            }
            let styles = ['color: red', 'background: white', 'font-weight: 900'].join(';');
            flag ? console.log('%c%s', styles, msg) : null;
        },
        success(msg) {
            if (typeof msg !== 'string') {
                throw new Error("msg must be string")
            }
            let styles = ['color: green', 'background: white', 'font-weight: 900'].join(';');
            flag ? console.log('%c%s', styles, msg) : null;
        },
    }
}