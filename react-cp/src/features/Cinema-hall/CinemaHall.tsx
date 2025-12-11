import { useEffect, useState } from "react";
import { getSeatLayoutData } from "./service";
import "./CinemaHall.css";

function CinemaHall() {
  let [seatData, setSeatData] = useState<any>([]);
  let [error, setError] = useState("");
  let [selectedRow, setSelectedRow] = useState<any>([]);
  let [mouseDown, setMouseDown] = useState(false);
  useEffect(() => {
    async function getSeatData() {
      try {
        let data = await getSeatLayoutData();
        setSeatData(data.rows);
      } catch (error: any) {
        setError(error);
      }
    }
    getSeatData();
  }, []);

  function selectSeat(selectedSeatRow: any, selectedSeatId: any) {
    setSelectedRow([...selectedRow, selectedSeatRow]);
    setSeatData((prevValue: any) => {
      let data = prevValue.map((value: any) => {
        if (value.rowId == selectedSeatRow) {
          value.seats.map((seat: any) => {
            if (seat.seatId == selectedSeatId && seat.status != "booked") {
              seat.status = "selected";
            }
          });
        }
        return value;
      });
      return data;
    });
  } // function to select seat

  function bookSeat() {
    setSeatData((prevValue: any) => {
      let data = prevValue.map((value: any) => {
        if (selectedRow.includes(value.rowId)) {
          value.seats.map((seat: any) => {
            if (seat.status == "selected") {
              seat.status = "booked";
            }
          });
        }
        return value;
      });
      return data;
    });
  }

  function clearSeats() {
    setSeatData((prevValue: any) => {
      let data = prevValue.map((value: any) => {
        if (selectedRow.includes(value.rowId)) {
          value.seats.map((seat: any) => {
            if (seat.status == "selected") {
              seat.status = "available";
            }
          });
        }
        return value;
      });
      return data;
    });
  }
  return (
    <div className="cinema-hall-container">
      <h2>Cinema Hall</h2>
      <div className="buttons-container">
        <button className="button" onClick={bookSeat}>
          Book Seat
        </button>
        <button className="button" onClick={clearSeats}>
          Clear
        </button>
      </div>
      <div>
        {seatData.map((rowName: any, i: any) => {
          return (
            <div key={i} className="cinema-rows">
              <span>{rowName?.rowId}</span>
              <div className="seats">
                {rowName.seats.map((rowSeats: any, i: any) => {
                  return (
                    <span
                      className={`inidividual-seat ${
                        rowSeats.status == "selected"
                          ? "selected"
                          : rowSeats.status == "booked"
                          ? "booked"
                          : ""
                      }`}
                      key={i}
                      //   onClick={() =>
                      //     selectSeat(rowName?.rowId, rowSeats.seatId)
                      //   }
                      onMouseDown={() => {
                        setMouseDown(true);
                        selectSeat(rowName?.rowId, rowSeats.seatId);
                      }}
                      onMouseEnter={() => {
                        mouseDown
                          ? selectSeat(rowName?.rowId, rowSeats.seatId)
                          : "";
                      }}
                      onMouseUp={() => setMouseDown(false)}
                    >
                      {rowSeats.seatId}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CinemaHall;
