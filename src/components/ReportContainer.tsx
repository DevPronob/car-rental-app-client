import React, { useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { useReactToPrint } from "react-to-print";
import { CategoryScale, Chart, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { TBooking } from "../types/booking.type";
import { TCar } from "../types/car.type";
import { useGetBookingQuery } from "../redux/features/booking/booking.api";
import { useGetCarsQuery } from "../redux/features/car/car.api";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReportContainer() {
    const { data: bookingData } = useGetBookingQuery(undefined);
    const { data: carData } = useGetCarsQuery(undefined);

    const [filter, setFilter] = useState<"daily" | "weekly" | "monthly" | "yearly">("monthly");
    const componentRef = useRef<HTMLDivElement>(null);

    // Function to handle printing
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Car Rental Reports",
    });

    // Example data for the chart
    const data = {
        labels: Array.isArray(carData?.data) ? carData.data.map((car: TCar) => car.name) : [], // Car names as labels
        datasets: [
            {
                label: "Revenue",
                data: Array.isArray(bookingData?.data)
                    ? bookingData.data.map((booking: TBooking) => booking.totalCost)
                    : [], // Total cost per booking
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
            {
                label: "Usage",
                data: Array.isArray(bookingData?.data)
                    ? bookingData.data.map(() => Math.floor(Math.random() * 100))
                    : [], // Placeholder for car usage data
                backgroundColor: "rgba(255, 99, 132, 0.6)",
            },
        ],
    };

    // Handle filter change
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as "daily" | "weekly" | "monthly" | "yearly");
        // Apply logic here to filter bookingsData based on the selected interval
    };

    return (
        <div>
            <div className="p-6">
                {/* Filter Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Car Rental Reports</h1>
                    <div className="flex gap-4">
                        <select
                            value={filter}
                            onChange={handleFilterChange}
                            className="border rounded p-2"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                        <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Print Report
                        </button>
                    </div>
                </div>

                {/* Report Section */}
                <div ref={componentRef} className="bg-white p-4 rounded shadow-md">
                    {/* Bar Chart */}
                    <Bar data={data} />
                </div>
            </div>
        </div>
    );
}

export default ReportContainer;
