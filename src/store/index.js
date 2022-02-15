import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (error) {
    return {}
  }
}
export default createStore({
  state: {
    // cartList: {
    //   // 商店ID
    //   shopId: {
    //     // 商品ID
    //     shopName: '',
    //     productList: {
    //       productId: {}
    //     }
    //   }
    // }
    cartList: getLocalCartList()
  },
  mutations: {
    // 选择购买数量
    changeProductCount (state, payload) {
      const { shopId, shopName, productId, productInfo, num } = payload
      // 根据商店id在购物车列表中查看商店信息
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {
          shopName: '',
          productList: {}
        }
      }
      // 根据商品id在商店中查看商品信息
      shopInfo.shopName = shopName
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
        product.checked = true
      }
      product.count = product.count + num
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      // state的cartList中添加数据
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    // 切换商品勾选
    checkedProduct (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.checked = !product.checked
      setLocalCartList(state)
    },
    // 清空购物车
    clearCart (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    // 全选/取消全选
    toggleSelectAll (state, payload) {
      const { shopId, isSelectAll } = payload
      const productList = state.cartList[shopId].productList
      if (isSelectAll.value) {
        for (const i in productList) {
          productList[i].checked = false
        }
      } else {
        for (const i in productList) {
          productList[i].checked = true
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
