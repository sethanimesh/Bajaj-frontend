
import './App.css';
import React, { useState } from 'react';
import FilterDropdown from './Components/FilterDropdown';
import ResponseDisplay from './Components/ResponseDisplay'
import JsonInput from './Components/JsonInput';

function App() {
  const [response, setResponse] = useState(null);
    const [filters, setFilters] = useState([]);

    return (
        <div className="App">
            <h1>21BBS0053</h1>
            <JsonInput onValidJson={setResponse} />
            {response && (
                <>
                    <FilterDropdown filters={filters} setFilters={setFilters} />
                    <ResponseDisplay response={response} filters={filters} />
                </>
            )}
        </div>
    );
}

export default App;
