import React from "react";
import './Customer.css';

import Information from './Information/Information';
import Status from './Status/Status';
import RepairLog from './RepairLog/RepairLog';
import RemoveCustomer from './RemoveCustomer/RemoveCustomer';

function Customer({ id, first, last, email, phone, status, log, updateCustomer, removeCustomer }) {

    return (
      <div id="Customer__container">
        <Information id={ id } first={ first } last={ last } email={ email } phone={ phone } updateCustomer={updateCustomer}/>
        <Status id={ id } status={ status } updateCustomer={updateCustomer}/>
        <RepairLog id={ id } log={ log } updateCustomer={updateCustomer}/>
        <RemoveCustomer id={ id } removeCustomer={removeCustomer}/> 
      </div>
    )
}

export default Customer;
