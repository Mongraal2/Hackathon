import React, { useState } from "react";
import Switch from "@mui/material/Switch";

const SunMorning = (props) => {
  const [buttonState, setButtonState] = useState(
    props.trimming.sun.morningTime.close
  );
  const [slotValue, setSlotValue] = useState(
    props.trimming.sun.morningTime.slot
  );
  const morningButtonHandel = (event) => {
    props.setTrimming(
      props.trimming,
      (props.trimming.sun.morningTime.close = !event.target.checked)
    );

    props.setTrimming(
      props.trimming,

      props.trimming.sun.eveningTime.close &&
        props.trimming.sun.morningTime.close
        ? (props.trimming.sun.close = true)
        : (props.trimming.sun.close = false)
    );

    setButtonState(props.trimming.sun.morningTime.close);
  };

  const morningFromHandel = (event) => {
    props.setTrimming(
      props.trimming,
      (props.trimming.sun.morningTime.from = event.target.value)
    );
  };

  const morningTillHandel = (event) => {
    props.setTrimming(
      props.trimming,
      (props.trimming.sun.morningTime.till = event.target.value)
    );
  };
  return (
    <div>
      <div className="col-6 ">
        <span>Morning Time : </span>

        <Switch onChange={morningButtonHandel} checked={!buttonState} />

        <div className="row d-flex justify-content-around">
          <div className="col-4">
            <spam>From</spam>{" "}
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "75px" }}
              onChange={morningFromHandel}
            >
              <option select value={props.trimming.sun.morningTime.from}>
                {props.trimming.sun.morningTime.from}
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
          <div className="col-4">
            <spam>Till</spam>{" "}
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "75px" }}
              onChange={morningTillHandel}
            >
              <option select value={props.trimming.sun.morningTime.till}>
                {props.trimming.sun.morningTime.till}
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
          <div className="col-4">
            <span>Slot</span>
            <input
              type="number"
              placeholder="Slot"
              class="form-control"
              value={slotValue}
              onChange={(event) => {
                props.setTrimming(
                  props.trimming,
                  (props.trimming.sun.morningTime.slot = event.target.value)
                );
                setSlotValue(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunMorning;
