import React, { useState } from 'react';
import axios from 'axios';

function JsonInput({ onValidJson }) {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedJson = JSON.parse(jsonInput);
            const response = await axios.post('http://localhost:8080/bfhl', parsedJson);
            onValidJson(response.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON format or server error');
        }
    };

    return (
        <div>
            <h2>API Input</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="4"
                    cols="50"
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                ></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default JsonInput;