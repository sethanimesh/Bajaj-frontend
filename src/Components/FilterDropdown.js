import React from 'react';

function FilterDropdown({ filters, setFilters }) {
    const options = [
        { value: 'Numbers', label: 'Numbers' },
        { value: 'Alphabets', label: 'Alphabets' },
        { value: 'Highest Lowercase Alphabet', label: 'Highest Lowercase Alphabet' }
    ];

    const handleChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setFilters(value);
    };

    return (
        <div>
            <h3>Multi Filter</h3>
            <select multiple={true} onChange={handleChange} value={filters}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FilterDropdown;