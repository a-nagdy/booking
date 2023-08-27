import { TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const CustomTimePicker = ({
  selectedTime,
  onClose,
  onChange,
  reserveTimes,
  datePicked,
  productName,
}) => {
  console.log(productName);

  return (
    <div className="mt-10 flex select-none flex-wrap items-center gap-1 text-white">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Select Time"
          value={selectedTime}
          views={["hours"]}
          onChange={onChange}
          onClose={onClose}
          ampm={false}
          shouldDisableTime={(time) =>
            reserveTimes.some(
              (reservedTime) =>
                reservedTime.date === datePicked &&
                reservedTime.time === time.format("HH A") &&
                reservedTime.product === productName
            ) ||
            time.hour() < 10 ||
            time.hour() > 24
          }
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomTimePicker;
