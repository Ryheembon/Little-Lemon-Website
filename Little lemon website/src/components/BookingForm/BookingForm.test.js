import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    const mockProps = {
        availableTimes: ['17:00', '18:00'],
        updateTimes: jest.fn()
    };

    test('Renders the form labels', () => {
        render(<BookingForm {...mockProps} />);
        expect(screen.getByText("Date")).toBeInTheDocument();
        expect(screen.getByText("Time")).toBeInTheDocument();
    });
});