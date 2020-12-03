import React, { Component } from 'react'

 class Note  extends Component {  
     

    constructor(props){
        super(props);

        this.state = {
            items:[],
            add:""
        }
        this.addNote=this.addNote.bind(this);
    }
    addNote(event){
        console.log("working");
        if(this.theTitle.value !=""){
            var newItem={
                title:this.theTitle.value,
                note:this.theNote.value
            };
        }

        this.setState((prevState)=>{
            return{
                items:prevState.items.concat(newItem)

            };
        });
        this.theNote.value="";
        this.theTitle.value="";
        
        
        event.preventDefault();

    }

    NewADD=()=>{
        this.setState({add:"sagar"})
    }
    render() {
        return (
            
            <div>
            <div className="main-content" >
                <ol>
                {this.state.items.map((val)=><li>TITLE={val.title}<br/>Description={val.note}<br/>DATE={this.props.name}  <button  class="btn" type="submit">EDIT</button></li>)}
                </ol>
            </div>
            <div  className="sagar">
                <header>
                    <h1> ADD NOTE </h1>
                </header>
                
                <footer>
                    <form onSubmit={this.addNote}>
                        Title<br/><input 
                        type="text" 
                        placeholder="Enter Title......."
                        ref={(title)=>this.theTitle=title} /><br/><br/>

                        Description<br/><textarea
                         placeholder="Enter Note......."
                         ref={(note)=>this.theNote=note}
                        /><br/><br/>

                        <button class="btn" type="submit"> Add Note</button>
                        
                    
                    </form>
                </footer>
            
            </div>
            
            </div>
           
            
        )
    }
}

export default Note;
