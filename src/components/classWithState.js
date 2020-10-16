import React from 'react';

class ClassWithStateProps extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count :0,
            name:''
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.changeName = this.changeName.bind(this);
        this.onChange = this.onChange.bind(this);
    }
     increment = ()=>{
        let currentCount = this.state.count;
        currentCount = currentCount+1
        this.setState({count: currentCount});
    }
    decrement = ()=>{
        let currentCount = this.state.count;
        currentCount = currentCount-1
        this.setState({count: currentCount});
    }
    changeName = ()=>{
        let name = "vamshi";
        this.props.name = name;
        this.setState({
            name:name
        })
    }

    onChange(event){
        let value = event.target.value;
        this.setState({
            name:value
        });
    }
    render(){
        const htmlTag =   <div>
            <button className="btn btn-primary" onClick={this.increment}>Add</button>
            <button className="btn btn-success"  onClick={this.decrement}>Subtract</button>
            <h5>{this.state.count}</h5>
            <br/>
            <button className="btn btn-primary" onClick={this.changeName}>change name in props</button>
            <h5>Name in props</h5>
            <span>{this.props.name}</span>
            <br/>
            <h5>Name in state</h5>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChange}/>
            <span>{this.state.name}</span>
        </div>;
        return htmlTag;
    }
}

class ClassWithState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count :0
        };
        

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
     
    }
     increment = ()=>{
        let currentCount = this.state.count;
        currentCount = currentCount+1
        this.setState({count: currentCount});
    }
    decrement = ()=>{
        let currentCount = this.state.count;
        currentCount = currentCount-1
        this.setState({count: currentCount});
    }
    render(){
        const htmlTag =   <div className="row">
            <div className="col-6">
            <button className="btn btn-primary" onClick={this.increment}>Add</button>
            <button className="btn btn-success"  onClick={this.decrement}>Subtract</button>
            <h5>{this.state.count}</h5>
            </div>
            
        </div>;
        return htmlTag;
    }
}

export { ClassWithState,
    ClassWithStateProps};