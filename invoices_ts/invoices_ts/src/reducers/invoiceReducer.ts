//invoice reducer
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import invoiceService from '../services/invoices'
import {Invoice} from '../models/combinedSchemas'
import {AppDispatch} from '../store'

interface InvoiceState  {
    all: Invoice[]
    selected: Invoice | null
}
const initialState: InvoiceState = {
    all: [],
    selected: null,
} 

const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers:{
        setInvoices(state, action: PayloadAction<Invoice[]>){
            state.all = action.payload
        },
        selectInvoice(state, action: PayloadAction<Invoice | null>){
            state.selected = action.payload
        },
        clearSelectedInvoice(state) {
            state.selected = null
          }
    }
})

export const {
    setInvoices,
    selectInvoice,
    clearSelectedInvoice,
} = invoiceSlice.actions

export const initializeInvoices = () => {
    return async (dispatch:AppDispatch) => {
        const invoices = await invoiceService.getAll()
        console.log("Fetched invoices:", invoices); // Log the fetched data
        dispatch(setInvoices(invoices))
    }
}

export const fetchAndSelectInvoice = (id: number) => {
    return async (dispatch: AppDispatch) => {
        const invoice = await invoiceService.getByID(id)
        dispatch(selectInvoice(invoice))
    }
}

export default invoiceSlice.reducer