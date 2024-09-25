
import { Bar } from "react-chartjs-2";
import { useReactToPrint } from "react-to-print";
import { CategoryScale, Chart, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { TBooking } from '../../types/booking.type';
import { TCar } from '../../types/car.type';
import { TUser } from '../../types/user.type';
import ReportContainer from '../../components/ReportContainer';



function Reports() {

    return (
        <div>
            <ReportContainer />
        </div>
    )
}

export default Reports