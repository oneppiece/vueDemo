/**
 * Created by Administrator on 2016/12/13.
 */
new Vue({
    el: '#app',
    data: {
        index: 0,
        item: {
            userid: 0,
            username: '',
            password: ''
        },
        peopleList: [{
            "userid": "1",
            "username": "第一个",
            "password": "@YS"
        }, {
            "userid": "2",
            "username": "第二个",
            "password": "@YS"
        }]
    },
    methods: {
        addRow: function () {
            this.peopleList.push({
                userid: this.item.userid,
                username: this.item.username,
                password: this.item.password
            });
            this.item.userid = '';
            this.item.username = '';
            this.item.password = '';
        },
        update: function (item, index) {
            this.index = index;
            this.item.userid = item.userid;
            this.item.username = item.username;
            this.item.password = item.password;
        },
        doUpdate: function () {
            console.log(this.index);
            console.log(this.item.userid);
        }
    }
});