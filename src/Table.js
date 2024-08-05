import React from 'React';

const table=({column,row})=>{
    return(
        <table>
            <tr>
                {column.map((column)=>(
                    <th key={column.name}>{column.name}</th>
                ))}
            </tr>
            <tbody>
                {row.map((row,index)=>(
                    <tr key={index}>
                        {column.map((column) =>(
                        <td key={column.name}>{row[column.name]}</td>
            ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default table;