











import Vue from '../node_modules/vue/dist/vue'
//创建全局store
import Vuex from 'vuex'

Vue.use(Vuex)

let cart=window.JSON.parse(localStorage.getItem('cart') || '[]')

const store= new Vuex.Store ({
    state: {
        cart: cart
    },
    mutations: {
        add (state, goods) {

            let flag= false
            state.cart.some(item => {
                if ( item.id === goods.id ) {
                    item.count=item.count+goods.count
                    flag=true
                    return true
                }
            })

            



            if (!flag) {
                state.cart.push(goods)
            }



            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        },

        updateGoodCount(state,  goods) {
            state.cart.some(item => {
                if ( item.id == goods.id ) {
                    item.count=goods.count
                    return true
                }
            })







            localStorage.setItem('cart', window.JSON.stringify(state.cart))

        },

        delFrom (state, id) {
            state.cart.some((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1)
                    return true
                }
            })

            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        },

        change (state, i) {
            state.cart.some((item) => {
                if (item.id == i.id) {
                    item.selected = i.selected
                    return true
                }
            })

            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        }
    },
    getters: {
        statisti (state) {

            let i=0
            state.cart.forEach(item => i+= item.count)
            return i
        },

        idstr (state) {

            let arr = []
            state.cart.forEach(item => arr.push(item.id))
            
            return arr.join(',')
        },

        counted (state) {
            let i = {}
            state.cart.forEach(item => i[item.id]=item.count)



        

            return i
        },

        select (state) {
            let i = {}

            state.cart.forEach(item => i[item.id]=item.selected)

            return i
        },

        selectcount (state) {

            let i = 0
            state.cart.forEach(item => {
                if (item.selected) {
                    i+=item.count
                }
            })

            return i
        },

        amount (state) {
            let i = 0
            state.cart.forEach(item => {
                if (item.selected) {
                    i+= item.count*item.price
                }
            })

            return i
        }
    }
})


export default store