import React, { Component } from 'react';
class LabelComponent extends Component{
constructor(props){
    super(props);
}
 render() {
        return (
            <div className='demo'>
                    <label className="label">{this.props. companyName }</label>
            </div>
        )
    }
}
export default LabelComponent;