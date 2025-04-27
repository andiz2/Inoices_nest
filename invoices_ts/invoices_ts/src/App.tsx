import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeInvoices } from './reducers/invoiceReducer';
import InvoiceList from './components/Invoices';
import { AppDispatch } from './store';
import LoginForm from './components/LoginForm';
import { RootState } from './store';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);

  useEffect(() => {
    if (isLogged) {
      dispatch(initializeInvoices());
    }
  }, [dispatch, isLogged]);

  return (
    <>
      <Routes>
        <Route path="/invoices" element={isLogged ? <InvoiceList /> : <LoginForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default App;
