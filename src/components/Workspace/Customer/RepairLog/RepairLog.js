import React from "react";
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './RepairLog.css';

export default function RepairLog({ id, log, updateCustomer }) {
    return (
      <div id="CustomerRepairLog__container">
        <h5> Repair Log </h5>
        <ToggleEdit multi id={ id } property="log" val={ log } readOnlyVal={ log } updateCustomer={updateCustomer}/>
      </div>
    )
}
