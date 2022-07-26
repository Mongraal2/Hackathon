import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { MonthPicker } from "@mui/x-date-pickers/MonthPicker";
import { YearPicker } from "@mui/x-date-pickers/YearPicker";
import Grid from "@mui/material/Grid";
import { Switch } from "@mui/material";

const minDate = new Date();
const maxDate = new Date("2030-12-29T00:00:00.000");

export default function AsPerDate(props) {
  const [date, setDate] = useState(new Date());

  const [morningSlotValue, setMorningSlotValue] = useState(
    props.newDate.date.morningTime.slot
  );
  const [eveningSlotValue, setEveningSlotValue] = useState(
    props.newDate.date.eveningTime.slot
  );

  const morningButtonHandel = (event) => {
    console.log("morning");
    props.setNewDate(
      props.newDate,
      (props.newDate.date.morningTime.close = !event.target.checked)
    );

    props.setNewDate(
      props.newDate,

      props.newDate.date.eveningTime.close &&
        props.newDate.date.morningTime.close
        ? (props.newDate.date.close = true)
        : (props.newDate.date.close = false)
    );

  };

  const morningFromHandel = (event) => {
    props.setNewDate(
      props.newDate,
      (props.newDate.date.morningTime.from = event.target.value)
    );

    // console.log(props.newDate);
  };

  const morningTillHandel = (event) => {
    props.setNewDate(
      props.newDate,
      (props.newDate.date.morningTime.till = event.target.value)
    );
    // console.log(props.newDate);

  };
  const eveningButtonHandel = (event) => {
    console.log("evening");
    props.setNewDate(
      props.newDate,
      (props.newDate.date.eveningTime.close = !event.target.checked)
    );

    props.setNewDate(
      props.newDate,

      props.newDate.date.eveningTime.close &&
        props.newDate.date.eveningTime.close
        ? (props.newDate.date.close = true)
        : (props.newDate.date.close = false)
    );

  };

  const eveningFromHandel = (event) => {
    props.setNewDate(
      props.newDate,
      (props.newDate.date.eveningTime.from = event.target.value)
    );
    // console.log(props.newDate);


  };

  const eveningTillHandel = (event) => {
    props.setNewDate(
      props.newDate,
      (props.newDate.date.eveningTime.till = event.target.value)
    );
    // console.log(props.newDate);

  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <YearPicker
              date={date}
              minDate={minDate}
              maxDate={maxDate}
              onChange={(newDate) => {
                props.setNewDate(props.newDate, (props.newDate.date.date = newDate));
                setDate(new Date(newDate))
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MonthPicker
              date={date}
              minDate={minDate}
              maxDate={maxDate}
              onChange={(newDate) => {
                props.setNewDate(props.newDate, (props.newDate.date.date = newDate));
                setDate(new Date(newDate))
              }} />
          </Grid>


          <Grid item xs={12} md={5}>

            <CalendarPicker
              date={date}
              minDate={minDate}
              maxDate={maxDate}
              onChange={(newDate) => {
                props.setNewDate(props.newDate, (props.newDate.date.date = newDate));
                setDate(new Date(newDate))
                console.log(new Date(props.newDate.date.date))
              }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ display: "flex", gap: "20px" }}>
              <div className="col-6 ">
                <span>Morning Time : </span>

                <Switch onChange={morningButtonHandel} />

                <div style={{ display: "flex", gap: "5px" }}>
                  <div className="col-3">

                    <spam>From</spam>{" "}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ width: "75px" }}
                      onChange={morningFromHandel}
                    >
                      <option select value={props.newDate.date.morningTime.from}>
                        {props.newDate.date.morningTime.from}
                      </option>

                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                    </select>
                  </div>

                  <div className="col-3">

                    <spam>Till</spam>{" "}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ width: "75px" }}
                      onChange={morningTillHandel}
                    >
                      <option select value={props.newDate.date.morningTime.till}>
                        {props.newDate.date.morningTime.till}
                      </option>

                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                    </select>
                  </div>

                  <div className="col-2">
                    <span>Slot</span>
                    <input
                      type="number"
                      placeholder="Slot"
                      class="form-control"
                      value={morningSlotValue}
                      onChange={(event) => {
                        props.setTrimming(
                          props.trimming,
                          (props.newDate.date.morningTime.slot = event.target.value)
                        );
                        setMorningSlotValue(event.target.value);
                      }}
                    />
                  </div>

                </div>
              </div>
              <div className="col-6 ">
                <span>Evening Time : </span>

                <Switch onChange={eveningButtonHandel} />


                <div style={{ display: "flex", gap: "5px" }}>
                  <div className="col-3">

                    <spam>From</spam>{" "}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ width: "75px" }}
                      onChange={eveningFromHandel}
                    >
                      <option select value={props.newDate.date.eveningTime.from}>
                        {props.newDate.date.eveningTime.from}
                      </option>

                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                    </select>
                  </div>

                  <div className="col-3">

                    <spam>Till</spam>{" "}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ width: "75px" }}
                      onChange={eveningTillHandel}
                    >
                      <option select value={props.newDate.date.eveningTime.till}>
                        {props.newDate.date.eveningTime.till}
                      </option>

                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                    </select>
                  </div>

                  <div className="col-2">
                    <span>Slot</span>
                    <input
                      type="number"
                      placeholder="Slot"
                      class="form-control"
                      value={eveningSlotValue}
                      onChange={(event) => {
                        props.setTrimming(
                          props.trimming,
                          (props.newDate.date.eveningTime.slot = event.target.value)
                        );
                        setEveningSlotValue(event.target.value);
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <table style={{ margin: "50px" }}>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Morning Time</th>
              <th>Evening Time</th>
            </tr>
            {props.trimming.map((val) => {
              console.log(val)
              return <tr key={val._id}>
                <td>{val.date.date}</td>
                <td>{val.date.morningTime.from}-{val.date.morningTime.till}</td>
                <td>{val.date.eveningTime.from}-{val.date.eveningTime.till}</td>
              </tr>
            })}
          </tbody>
        </table>
      </LocalizationProvider>

    </>

  );
}
