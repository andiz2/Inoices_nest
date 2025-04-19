import { useDispatch, useSelector } from 'react-redux'
import { fetchAndSelectInvoice } from '../reducers/invoiceReducer'
import InvoiceModal from './InvoiceModal'
import { RootState, AppDispatch } from '../store'

const InvoiceList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const invoices = useSelector((state:RootState) => state.invoices.all)
  const selectedInvoice = useSelector((state: RootState) => state.invoices.selected)

  const handleInvoiceClick = (invoiceId: number) => {
    dispatch(fetchAndSelectInvoice(invoiceId))
  }

  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Invoices</h2>

      {invoices.length === 0 ? (
        <p>No invoices available</p> 
      ) : (
        <div className="space-y-4">
          {invoices.map(invoice => (
            <div
              key={invoice.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
              onClick={() => handleInvoiceClick(invoice.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{invoice.vendor_name}</h3>
                <span className="text-sm text-gray-500">{invoice.due_date}</span>
              </div>

              <p className="text-gray-600 mt-2">
                <span className="font-medium text-gray-700">Amount:</span> ${invoice.amount.toFixed(2)}
              </p>

              <p className="text-gray-600 mt-2">
                <span className="font-medium text-gray-700">Status:</span>{' '}
                {invoice.paid ? (
                  <span className="text-green-600 font-medium">Paid</span>
                ) : (
                  <span className="text-red-600 font-medium">Unpaid</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      {selectedInvoice && <InvoiceModal />} 
    </>
  )
}

export default InvoiceList
