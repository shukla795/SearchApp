import React from 'react';
export const SearchBar=(props)=>{
    return (<div className='form-group'>
        <label>Search</label>
        <input type='text' onChange={props.takeInput} className='form-control' placeholder='Type to Search any Image'/>
        <button onClick={props.btClick} className='btn btn-primary'>Search Now</button>
        </div>
        );
}