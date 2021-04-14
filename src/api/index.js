import axios from 'axios'

export default {
    // articleListFormat: { title: '前端Web安全1', link: 'https://ymlog.cn/', created: '2018/4/1', tag: 'vue,html', category: '后端', visited: '1', id: 'x' },
    articleLists() {
        return new Promise((resolve, reject) => {
            axios({
                url: process.env.VUE_APP_API_ADDRESS + "/articles",
                method: 'get',
                timeout: 2000
            }).then(res => {
                let arr = [];
                for (let item of res.data) {
                    let { id, created, title, tags, category, visited } = item;
                    // 格式化标题
                    title = title.replace(/\.md/g, '');
                    // 
                    // 格式化标签数组
                    tags = tags.split(/,/).map(v => v.trim());
                    // 
                    // 格式化时间
                    created = created.replace(/T.*/g, '').replace(/-/g, '/');
                    let [year, month, day] = created.split("/");
                    month.length !== 2 ? (month = "0" + month) : null;
                    day.length !== 2 ? (day = "0" + day) : null;
                    created = `${year}/${month}/${day}`;

                    arr.push({
                        id,
                        created,
                        title,
                        tags,
                        category,
                        visited
                    })
                }

                // 按照时间排序
                arr.sort((a,b)=>{
                    return new Date(b.created) - new Date(a.created);
                })
                resolve(arr)
            }).catch(rea => {
                reject(rea);
            })
        })
    },
    search(keyword){
        return new Promise((resolve,reject)=>{
            axios({
                url: process.env.VUE_APP_API_ADDRESS + "/search?keyword=" + keyword,
                method: 'get',
                timeout: 2000
            }).then(res=>{
                let arr = res.data;
                arr = arr.map(({id,content})=>{
                    return {
                        id,
                        content: content.split(/\n/).join('').replace(/[=,· ·、\.。\?！~@#￥% \r\n]/,'').replace(/^[·《》]/,'').replace(/[·《》]$/,'').replace(/(·| )/g,''),
                        keyword
                    }
                })
                resolve(arr);
            }).catch(rea=>{
                reject(rea);
            })
        })
    },
    getRecommandArticles(platform){
        return new Promise((resolve,reject)=>{
            axios({
                url: process.env.VUE_APP_API_ADDRESS + "/hot?platform=" + platform,
                method: 'get',
                timeout: 2000
            }).then(result=>{
                resolve(result.data);
            }).catch(reason=>{
                reject(reason)
            })
        })
    }
}