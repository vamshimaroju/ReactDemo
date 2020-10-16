import React from 'react';
import ReactDOM from 'react-dom';

import ReactLifeCycle from './ReactLifeCycle';
import FunctionComponent from './function';
class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            view : false
        }
        
        this.changeComponent = this.changeComponent.bind(this);
    }

    componentDidMount(){
        this.changeComponent();
    }
    changeComponent(){

        if(this.state.view ){
            ReactDOM.render( <ReactLifeCycle name="apple" {...this.props}/>,document.getElementById('updateComponent'));
            this.state.view = false
        }else{
            ReactDOM.render( <FunctionComponent {...this.props}/>,document.getElementById('updateComponent'));
            this.state.view = true
        }
    }

    render(){
        let html = React.createElement('div',{className:'row'},
            React.createElement('div',{ className:'col-12' },
            React.createElement('h1',{},"H1 Tag"),
            React.createElement('button',{
                onClick:this.changeComponent,
                className:'btn btn-primary'
            },'Change Component'),React.createElement('div',{
                id:'updateComponent'
            })))
        return ( html );
    }
}


export default ClassComponent;