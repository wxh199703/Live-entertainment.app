






import Vue from '../node_modules/vue/dist/vue'









import moment from 'moment'

Vue.filter('dateFormat', function (dateStr, Standard_time="YYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(Standard_time)
})