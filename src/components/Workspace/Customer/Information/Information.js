import React from 'react';
import ToggleEdit from '../ToggleEdit/ToggleEdit';
import './Information.css';

export default function Information( { id, first, last, email, phone, updateCustomer }) {
  return (

    <div id="CustomerInformation__container">
      <p id="CustomerInformation__fullName"> { first } { last } </p>
      <p id="CustomerInformation__id"> ID: { id } </p>
      <ToggleEdit id={ id } description="First Name" property="first" val={ first } readOnlyVal={ first } updateCustomer={updateCustomer}/>
      <ToggleEdit id={ id } description="Last Name" property="last" val={ last } readOnlyVal={ last } updateCustomer={updateCustomer}/>
      <ToggleEdit id={ id } description="Email" property="email" val={ email } readOnlyVal={ email } updateCustomer={updateCustomer}/>
      <ToggleEdit id={ id } description="Phone" property="phone" val={ phone } readOnlyVal={ phone } updateCustomer={updateCustomer}/>
    </div>
  )
}
