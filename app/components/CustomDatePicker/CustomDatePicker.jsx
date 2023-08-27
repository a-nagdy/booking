import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const CustomDatePicker = ({ datePicked, onDateChange, reserveTimes }) => (
  <div className="mt-3 flex select-none flex-wrap items-center gap-1 text-white">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose Date"
        value={null}
        onChange={onDateChange}
        minDate={dayjs().startOf("day")}
        shouldDisableDate={(date) =>
          reserveTimes.some(
            (reservedTime) => reservedTime.date === date
          )
        }
      />
    </LocalizationProvider>
  </div>
);

export default CustomDatePicker;
