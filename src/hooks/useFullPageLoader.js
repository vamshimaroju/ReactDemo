import React,{useState} from 'react';
import FullPageLoader from '../cssUtils/FullPageLoader';

function useFullPageLoader(){
    const [loading,setLoading] = useState(false);

    return [
        loading?<FullPageLoader/>:null,
        (param)=>setLoading(param),
        (param)=>setLoading(param)
    ];
};

export default useFullPageLoader;