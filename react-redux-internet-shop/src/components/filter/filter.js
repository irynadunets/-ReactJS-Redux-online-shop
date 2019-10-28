import React from 'react';
import './filter.css'
import { NavDropdown} from 'react-bootstrap';

const Filter = ({ goods, loading, error, filter, setFilter }) => {
  return (
    <NavDropdown title="Sort by" id="basic-nav-dropdown">
        <NavDropdown.Item  onClick={setFilter.bind(this,'all')}>All</NavDropdown.Item>
        <NavDropdown.Item  onClick={setFilter.bind(this,'price_high')}>Price up</NavDropdown.Item>
        <NavDropdown.Item  onClick={setFilter.bind(this,'price_low')}>Price down</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  onClick={setFilter.bind(this,'name')}>Name</NavDropdown.Item>
      </NavDropdown>
      )
};

export default Filter;
