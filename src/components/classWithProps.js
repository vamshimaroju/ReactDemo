import React from 'react';

class ClassWithProps extends React.Component{
    constructor(props){
        super(props);
        this.getBack = this.getBack.bind(this);
    }
    getBack(){
        this.props.history.push("/classComponent");
    }
    render(){
        const htmlTag = 
        <div className="row">
            <div className="col-6">
            <h1>Class With props</h1>
            <span>Props value {this.props.name}</span>
            </div>
            <div className="col-6">
                <button className="btn btn-primary" onClick={this.getBack}>Go Back</button>
            </div>
        </div>
        return htmlTag;
    }

    componentDidCatch(e){
        console.log(e.message);
    }
}

export default ClassWithProps;