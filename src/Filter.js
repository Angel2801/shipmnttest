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
}
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
                    </>
                    
                )
    }
}