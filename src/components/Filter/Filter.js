import React from 'react';
import style from './Filter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact-form/contacts-action';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <b>Find contacts by name:</b>
        <input
          className={style.input}
          type="text"
          name="filter"
          placeholder="Rosie Simpson"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
