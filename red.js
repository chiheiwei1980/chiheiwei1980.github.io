function initial() {
    new Vue({
        el:'#nvr',
        data: {
            message_01:'關於我們',
            message_02:'產品口味',
            message_03:'預購電話',
            message_04:'位置資訊',
        }
    })
    new Vue({
        el:'#about',
        data:{
            message_01:'豐原萬丹紅豆餅，在豐原復興商圈中，位於復興路上，口味分別為紅豆、奶油、芋頭、花生、OREO、高麗菜等六種口味。',
        }
    })
    new Vue({
        el:'#googlemap',
        data:{
            message_01:'位置資訊',
        }
    })
}