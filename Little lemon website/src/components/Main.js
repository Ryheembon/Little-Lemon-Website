import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const result = await submitAPI(formData);
        if (result) {
            navigate('/confirmed-booking');
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/booking" element={<BookingForm submitForm={submitForm} />} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
                {/* ... other routes ... */}
            </Routes>
        </main>
    );
}

export default Main; 