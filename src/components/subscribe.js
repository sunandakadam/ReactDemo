import React ,{Component} from "react";

class Subscribe extends Component{
    constructor(){
        super();
        this.state={
            message:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for Subsribing'
        })
    }
    render(){
        return(
           <div style={{'text-align':"center"}}>
               <h2 style={{color: "#FF8C00", 'text-align':"center"}}>{this.state.message}</h2>
               <button style={{color: "blue", 'text-align':"center"}} onClick={()=>{
                   this.changeMessage()
               }}>Subscribe</button>
           </div>
     )
    }
}
export default Subscribe