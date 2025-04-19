import { useDispatch, useSelector } from 'react-redux'
import { clearSelectedInvoice } from '../reducers/invoiceReducer'
import { Modal, Box, Fade, Backdrop } from '@mui/material'
import {RootState} from '../store'

const InvoiceModal = () => {
  const dispatch = useDispatch()
  const invoice = useSelector((state: RootState) => state.invoices.selected)
  const isOpen = Boolean(invoice)

  const handleClose = () => {
    dispatch(clearSelectedInvoice())
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 300 },
      }}
    >
      <Fade in={isOpen}>
        <Box
          className="
            flex
            justify-center
            items-center
            bg-white
            p-8
            rounded-lg
            w-1/3  // Adjusted to 1/3 of the screen width
            mx-auto
            mt-24
            shadow-lg
            border
            border-gray-200
            backdrop-blur-lg
            bg-opacity-95
            relative
          "
        >
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Invoice from {invoice?.vendor_name}
            </h2>

            <p className="text-gray-600 mb-2">
              <span className="font-medium text-gray-700">Amount:</span> ${invoice?.amount?.toFixed(2)}
            </p>

            <p className="text-gray-600 mb-2">
              <span className="font-medium text-gray-700">Due Date:</span> {invoice?.due_date}
            </p>

            <p className="text-gray-600 mb-2">
              <span className="font-medium text-gray-700">Description:</span> {invoice?.description}
            </p>

            <p className="text-gray-600">
              <span className="font-medium text-gray-700">Status:</span>{' '}
              {invoice?.paid ? (
                <span className="text-green-600 font-medium">Paid</span>
              ) : (
                <span className="text-red-600 font-medium">Unpaid</span>
              )}
            </p>

            <div className="mt-6 flex justify-center">
              <button
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition font-medium"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default InvoiceModal
