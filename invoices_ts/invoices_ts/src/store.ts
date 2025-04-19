//this is the react store
import {configureStore} from "@reduxjs/toolkit"

import reducerInvoices from './reducers/invoiceReducer'
import reducerAuth from './reducers/authReducer'

const store = configureStore({
    reducer:{
        invoices: reducerInvoices,
        auth: reducerAuth,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store