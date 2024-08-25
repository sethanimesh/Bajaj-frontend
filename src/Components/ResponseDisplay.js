import React from 'react';

function ResponseDisplay({ response, filters }) {
    const filteredResponse = {};

    if (filters.includes('Numbers')) {
        filteredResponse.Numbers = response.numbers.join(', ');
    }
    if (filters.includes('Alphabets')) {
        filteredResponse.Alphabets = response.alphabets.join(', ');
    }
    if (filters.includes('Highest Lowercase Alphabet')) {
        filteredResponse['Highest Lowercase Alphabet'] = response.highest_lowercase_alphabet;
    }

    return (
        <div>
            <h3>Filtered Response</h3>
            <ul>
                {Object.keys(filteredResponse).map(key => (
                    <li key={key}>{key}: {filteredResponse[key]}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResponseDisplay;