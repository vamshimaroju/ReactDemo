import React from 'react';
import Service from '../services/Service.js';


class ApiComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            apiRes:null
        }
    }

    componentDidMount(){
        console.log("component did mount");
         Service.getAxiosResponse().then(res =>{
            this.setState({
                apiRes:res
            })
        })
        
    }

    
    render(){
        const htmlTag = <div style={{padding:"15px"}}>
            <span>{JSON.stringify(this.state.apiRes,'',2)}</span>
        </div>

        return htmlTag;
    }
}

export default ApiComponent;