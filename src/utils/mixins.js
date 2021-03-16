import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
const flag = true;

export default {
    computed: {
        ...mapGetters([])
    },

    methods: {
        ...mapMutations([]),

        // 跳转到指定路由
        jumpto(pathName) {
            let path = "/" + pathName;
            if (this.$route.fullPath !== path) {
                this.$router.push({
                    path
                });
            }
        },
        info(msg) {
            if (typeof msg !== 'string') {
                throw new Error("msg must be string")
            }
            let styles = ['color: orange', 'background: white','font-weight: 900'].join(';');
            flag ? console.log('%c%s', styles, msg) : null;
        },
        error(msg) {
            if (typeof msg !== 'string') {
                throw new Error("msg must be string")
            }
            let styles = ['color: red', 'background: white','font-weight: 900'].join(';');
            flag ? console.log('%c%s', styles, msg) : null;
        },
        success(msg) {
            if (typeof msg !== 'string') {
                throw new Error("msg must be string")
            }
            let styles = ['color: green', 'background: white','font-weight: 900'].join(';');
            flag ? console.log('%c%s', styles, msg) : null;
        },
    }
}