import React from 'react';


class ReactLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            param1:'',
            view : true
        }
        this.updateStateParam = this.updateStateParam.bind(this);
    }

    componentDidMount(){
        console.log("component did mount");
    }

    componentWillMount(){
        console.log("component will mount");
        this.state.param1="prop1";
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillReceiveProps(){
        console.log("component will receive props");
    }
    shouldComponentUpdate(){
        console.log("should component update");
        return true;
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    // custom function
    updateStateParam(){
        this.setState({
            param1:"apple"
        })
    }
    
    render(){
        const htmlTag = <div>
            <div>React life cycle</div>
            <button onClick={this.updateStateParam}>Update state value</button>
            
            <br/>
            <div>
                <h5>Props</h5>
                <span>{this.props.name}</span>
                <h5>param 1</h5>
                <span>{this.state.param1}</span>
            </div>

        </div>
        return htmlTag;
    }
}

export default ReactLifeCycle;