/* eslint-disable @typescript-eslint/no-unused-expressions */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { OrderData } from '../../pages/add-order/addOrder.interface'
import orderService from './orderService'
import { errorMessage } from '../../utils/appUtils'

const initialState = {
  order: [],
  phone_number: '',
  sub_total: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: '',
  isOrderAdded:false
}

export const addOrder = createAsyncThunk(
  'order/add-order',
  async (data: OrderData, thunkApi) => {
    try {
      return await orderService.addOrder(data)
    } catch (error) {
      return thunkApi.rejectWithValue(errorMessage(error))
    }
  },
)

export const getOrderDetails = createAsyncThunk(
  "order/get-order",
  async(userId:string,thunkApi)=>{
try {
  return await orderService.getOrder(userId)
} catch (error) {
  return thunkApi.rejectWithValue(errorMessage(error))
}
  }
)


export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: (state: any) => {
      ;(state.isError = false),
        (state.isLoading = false),
        (state.isSuccess = false),
        (state.message = '')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        ;(state.isLoading = false),
          (state.isSuccess = true),
          (state.order = action.payload)
          state.isOrderAdded = true
      })
      .addCase(addOrder.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.error = action.error
        state.order = []
        state.isOrderAdded=false
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        ;(state.isLoading = false),
          (state.isSuccess = true),
          (state.order = action.payload)
      })
      .addCase(getOrderDetails.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.error = action.error
        state.order = []
      })
  },
})


export const {reset} = orderSlice.actions;
export default orderSlice.reducer