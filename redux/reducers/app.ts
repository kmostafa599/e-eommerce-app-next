import { createSlice } from '@reduxjs/toolkit'
import { AppStateType, CartItem, Category, Product } from 'types'

const initialState: AppStateType = {
  products: [],
  categories: [],
  cart: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setProducts: (state, { payload }: { payload: Product[] }) => {
      state.products = payload
    },
    setCategories(state, { payload }: { payload: Category[] }) {
      state.categories = payload
    },
    setCart(state, { payload }: { payload: CartItem[] }) {
      state.cart = payload
    },
    // increment(state, { payload }: { payload: any }) {
    //   const item = state.cart.find((item) => {
    //     return item.id === payload.id
    //   })
    //   if (item) {
    //     item.quantity = payload.value
    //   }
    // },
    changeCartQty(state, { payload }: { payload: CartItem }) {
      if (state.cart.length < 1) {
        state.cart.push(payload)
        console.log(JSON.stringify(state.cart))
      } else {
        const item = state.cart.find((item) => item.slug == payload.slug)
        if (!item) {
          state.cart.push(payload)
        } else {
          item.quantity += payload.quantity
          if (item.quantity < 1) {
            state.cart = state.cart.filter((i) => i.slug !== item.slug)
            console.log('push')
          }
        }
      }
      console.log(JSON.stringify(state.cart))
    },
    //
    decrement(state, { payload }: { payload: CartItem }) {
      const item = state.cart.find((item) => {
        return item.id === payload.id
      })
      if (payload.quantity === 1) {
        state.cart.filter((item) => {
          item.id !== payload.id
        })
      }
      else {
        payload.quantity -= 1
      }
    },
    // deleteCartItem(state, { payload }: { payload: CartItem }) {
    //   const filteredCart = state.cart.filter((item) => item.id !== payload.id)
    //   state.cart = filteredCart
    // }
    removeCartItem(state, { payload }: { payload: CartItem }) {
      state.cart = state.cart.filter((item) => item.slug !== payload.slug)
    },
    setCartItemQty(state, { payload }: { payload: CartItem }) {
      const item = state.cart.find((item) => item.slug == payload.slug)
      if (item) {
        item.quantity = payload.quantity
      }
    },
  },
})

export const {
  setProducts, setCategories, setCart, changeCartQty,
  removeCartItem,
 setCartItemQty,
} = appSlice.actions

export default appSlice.reducer
