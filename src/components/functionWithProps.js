import React from 'react';

function FunWithProps(props){
    const htmlTag = 
    <div>
        <h1>Hello {props.name}</h1>
    </div>
    return htmlTag;
}

// const FunWithProps = (props)=>{
//     const htmlTag = 
//     <div>
//         <h1>Hello {props.name}</h1>
//         <span>With new Function declaration syntax</span>
//     </div>
//     return htmlTag;
// }

export default FunWithProps;