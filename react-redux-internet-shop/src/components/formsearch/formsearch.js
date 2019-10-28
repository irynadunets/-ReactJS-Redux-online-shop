import React from 'react';
import './formsearch.css'
import { Form, FormControl} from 'react-bootstrap';


const FormSearch = ({ goods, loading, error, search, setSearch }) => {
  return (
    <Form inline>
    <FormControl type="text" placeholder="Search..." className="mr-sm-2"
     defaultValue={search}
     onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  setSearch(e.target.value);
                }
              }}
      />
    </Form>
)
};

export default FormSearch;
