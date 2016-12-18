/**
 * Created by Administrator on 2016/12/18.
 */
Vue.component('my-component', {
    template: '<h1>组件啊啊啊</h1>'
})
var inputComponent = {
    template: '<input type="button" :value="count" @click="count += 1">',
    data: function () {
        return {'count': 0};
    }
}
new Vue({
    el: '#app',
    components: {
        'input-component': inputComponent
    }
})