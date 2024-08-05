import React, { useState } from 'react';

const Filter=({column,onFilterChange})=>{
    const [filterType,setFilterType]=useState('');
    const [filterValue,setFilterValue]=useState('');
    const handleFilterChange=()=>{
        onFilterChange({
            column:column.name,
            type:filterType,
            value:filterValue
        });
    };
const FilterOptions=()=>{
    switch(column.type){
        case 'Integer':
            return(
                <>
                <select value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                    <option value="">Select Filter</option>
                    <option value="equals">Equals</option>
                    <option value="lessThan">Less than</option>
                    <option value="lessThanOrEqual">Less than or equal</option>
                    <option value="greaterThan">Greater than</option>
                    <option value="greaterThanOrEqual">Greater than or equal</option>
                    <option value="range">Range</option>
                    <option value="notEqual">Not equal</option>
                </select>
                {filterType==="range"?(
                    <>
                    <input type='number' placeholder='Min' value={filterValue.min || ''}
                     onchange={(e)=>setFilterValue({...filterValue,min:e.target.value})}></input>
                    <input type='number' placeholder='Max' value={filterValue.max||''}
                     onchange={(e)=>setFilterValue({...filterValue,max:e.target.value})}></input>
                    </>
                ):(
                    <input type='number' value={filterValue} onchange={(e)=>setFilterValue(e.target.value)}></input>
                )}
                </>
            );
            case 'String':
                return(
                    <>
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="">Select filter</option>
                    <option value="contains">Contains</option>
                    <option value="notContains">Not contains</option>
                    <option value="equals">Equals</option>
                    <option value="notEqual">Not equal</option>
                    <option value="startsWith">Starts with</option>
                    <option value="endsWith">Ends with</option>
                    <option value="isNull">Is null</option>
                    <option value="isNotNull">Is not null</option>
                    </select>
                    {!['isNull', 'isNotNull'].includes(filterType) && (
                        <input
                            type="text"
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}
                        />
                        )}
                    </>
                    
                );
            case 'Date':
                return(
                    <>
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="">Select filter</option>
                    <option value="dateIs">Date is</option>
                    <option value="dateRange">Date range</option>
                    <option value="equals">Equals</option>
                    <option value="lessThan">Less than</option>
                    <option value="lessThanOrEqual">Less than or equal</option>
                    <option value="greaterThan">Greater than</option>
                    <option value="greaterThanOrEqual">Greater than or equal</option>
                    <option value="notEqual">Not equal</option>
                    <option value="isNull">Is null</option>
                    <option value="isNotNull">Is not null</option>
                </select>
                    {filterType === 'dateRange' ? (
                    <>
                        <input
                        type="date"
                        value={filterValue.start || ''}
                        onChange={(e) => setFilterValue({ ...filterValue, start: e.target.value })}
                        />
                        <input
                        type="date"
                        value={filterValue.end || ''}
                        onChange={(e) => setFilterValue({ ...filterValue, end: e.target.value })}
                        />
                    </>
                    ) : !['isNull', 'isNotNull'].includes(filterType) ? (
                    <input
                        type="date"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                    ) : null}
                </>
                );
            case 'Enum':
                return (
                    <>
                      <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                        <option value="">Select filter</option>
                        <option value="in">In</option>
                        <option value="equals">Equals</option>
                        <option value="notEqual">Not equal</option>
                        <option value="notIn">Not in</option>
                        <option value="isNull">Is null</option>
                      </select>
                      {!['isNull'].includes(filterType) && (
                        <input
                          type="text"
                          value={filterValue}
                          onChange={(e) => setFilterValue(e.target.value)}
                          placeholder="Comma-separated values for 'in' and 'notIn'"
                        />
                      )}
                    </>
                  );
            case 'Boolean':
                return (
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                      <option value="">Select filter</option>
                      <option value="isNull">Is null</option>
                      <option value="isNotNull">Is not null</option>
                      <option value="equals">Equals</option>
                    </select>
                  );
                default:
                  return null;
    }
};

return (
    <div>
      <h4>{column.name}</h4>
      {FilterOptions}
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
};
export default Filter;