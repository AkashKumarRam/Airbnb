import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRangePicker, DateRange } from "react-date-range";

export default function DatePicker({
  state,
  dateChangeCallback,
}: {
  state: Array<DateStateType>;
  dateChangeCallback: (item: any) => void;
}) {
  return (
    <div>
      <div className="hidden md:block">
        <DateRangePicker
          onChange={dateChangeCallback}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={state}
          direction="horizontal"
        />
      </div>
      <div className="md:hidden">
        <DateRange
          onChange={dateChangeCallback}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={state}
          direction="horizontal"
        />
      </div>
    </div>
  );
}