import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CustomTimePicker = ({
  selectedTime,
  onClose,
  onChange,
  reserveTimes,
  datePicked,
}) => (
  <div className="mt-10 flex select-none flex-wrap items-center gap-1 text-white">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Select Time"
        value={selectedTime}
        views={["hours"]}
        onClose={onClose}
        onChange={onChange}
        shouldDisableTime={(time) =>
          reserveTimes.some(
            (reservedTime) =>
              reservedTime.date === datePicked &&
              reservedTime.time === time.format("HH A")
          )
        }
      />
    </LocalizationProvider>
  </div>
);

export default CustomTimePicker;
