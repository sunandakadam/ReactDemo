import React ,{Component} from "react";

class Count extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementCount(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <div style={{'text-align':"center"}}>
                <h2>Count App</h2>
                <p>count:{this.state.count} </p>
                <button onClick={()=>
                    this.incrementCount()
                }>Increment</button>
            </div>
           
        )
    }
}
export default Count