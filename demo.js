/**
 * Created by Administrator on 2016/12/15.
 */
var vm = new Vue({
    components: {
        'alert': VueStrap.alert
    },
    el: "#demo",
    data: {},
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        alert: function () {
            alert(1);
        }
    }
})