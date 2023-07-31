import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleChangeFilter}
      placeholder="Search Contacts"
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};


export default Filter;
