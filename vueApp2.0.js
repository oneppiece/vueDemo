/**
 * Created by Administrator on 2016/12/16.
 */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        hasError: true,
        divClassObject: {
            'form-group': true,
            'has-success': true,
            'has-feedback': true
        },
        myList: [{text: 'One'}, {text: 'Two'}, {text: 'Three'}],
        msg: 'msg',
        ok: true,
        type: 'A'
    },
    computed: {
        computeMsg: {
            get: function () {
                return this.msg.toLocaleUpperCase();
            },
            set: function (newVal) {
                this.msg = '00' + newVal;
            }
        },
        inputValidateClass: function () {
            return this.hasError ? {
                    'form-group': true,
                    'has-error': true,
                    'has-feedback': true
                } : {
                    'form-group': true,
                    'has-success': true,
                    'has-feedback': true
                };
        },
        spanClass: function () {
            return this.hasError ? {'glyphicon-remove': true} : {'glyphicon-ok': true};
        },
        styleObjecst: function () {
            return {
                color: 'red',
                fontSize: '20px'
            };
        }
    }
})