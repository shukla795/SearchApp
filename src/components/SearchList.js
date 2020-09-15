import React from 'react';
import { Picture } from './Picture';
export const SearchList = (props)=>{
    let totalNumberOfRecords = props.imagedata.length;
    console.log('props data',props.imagedata);
    const noRecordFoundJSX = <p>No record found</p>

   const successJSX = (
       <>
       <p>List of Records {totalNumberOfRecords}</p>
       {/* {props.imagedata.map(ele=><Picture src={ele.images.original.url}/>)} */}
       {props.imagedata.map(ele=><img src={ele.images.original.url}/>)}
       </>
   );

    return (
        <div>
            {props.imagedata.length==0?noRecordFoundJSX:successJSX}

        </div>
    )
}