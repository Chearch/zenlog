import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
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
            'searchResult',
            'recommandArticles',
            'ifViewVisible',
            'ifShowNav',
            'searchVisible',
            'currentIndex',
            'pageIndex',
            'totalIndex',
            'ifDarkMode'
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
            'setSearchResult',
            'setRecommandArticles',
            'setIfViewVisible',
            'setIfShowNav',
            'setSearchVisible',
            'addCurrentIndex',
            'delCurrentIndex',
            'setIfDarkMode',
        ]),

        // 跳转到指定路由
        jumpto(pathName) {
            let path = "/" + pathName;
            this.info('jumpto ',path);
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
        // 格式化时间为英文字符
        // 2021/04/03 => 03 March 2021
        fmtEn(time){
            let [year,month,day] = time.split('/');
            month = this.monthToEn(month);
            return `${day} ${month} ${year}`
        },
        clearAllTags(){
            this.modifySearchContent('');
            this.setSearchResult([]);
            this.setSelectTimeLine('');
            this.modifyCategory('');
            this.clearTags();
        },
        throttle(func,time,params){
            let task = null;
            return function(){
                if(task) return ;
                func.call(null,params);
                task = setTimeout(() => {
                    task = null;
                }, time);
            }
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
        monthToEn(m){
            m = String(m);
            m = m.length === 1 ? '0' + m : m;
            switch(m){
                case '01': return 'January';
                case '02': return 'February';
                case '03': return 'March';
                case '04': return 'April';
                case '05': return 'May';
                case '06': return 'June';
                case '07': return 'July';
                case '08': return 'August';
                case '09': return 'September';
                case '10': return 'October';
                case '11': return 'November';
                case '12': return 'December';
            }
        }
    },
}