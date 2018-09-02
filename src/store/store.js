import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放商品数据
    shoppingList: [],
  	BuyCarList:[],
  	num: 0,
    data: true,
      isShow: true,
      isChecked: false,
      ishide: false,
      price: 0,
      products: []

  },
  mutations: {
  	BuyCar(state,data) {
  		state.BuyCarList.push(data)
  		state.num = state.BuyCarList.length;
  	},
    update(state, isEdit) {
        state.data = isEdit
      },

      selectAll(state, isAllChecked) {
        // state.isChecked = isAllChecked
      },
      noAll(state, isAll) {
        state.isAll = isAll
      },
      addProduct(state, Data) {

      state.price += Data.secooPrice;
      state.products.push(Data);
    },
    reduceProduct(state, Data) {

      state.price -= Data.secooPrice;
    },
    deleteProduct(state, Data) {
      let index = state.products.findIndex(item => item.brandId == Data.brandId);
      // 移除数据
      state.products.splice(index, 1)
    },
    addPrice(state, Data) {
      // state.price = Data.secooPrice * Data.currency;
      if (state.price >= Data.secooPrice * Data.quantity) {
        state.price = Data.secooPrice * Data.quantity;
      } else {
        state.price += Data.secooPrice;
      }
    },
    reducePrice(state, Data) {
        // state.price = Data.secooPrice * Data.currency;
         if (state.price <= 0) {
            state.price = 0;
        } else {
          state.price -= Data.secooPrice;
        }
    }
  }

})
