
import React,{Component} from 'react';
import './Stylesheets.css'

class App extends Component {

      constructor(props){
        super(props);

        this.state = {
          newItem:"",
          list:[]
        }

      }

      updateInput(key, value){
          //update react state
          this.setState(
            {
                [key]:value
            }
          );
      }

      addItem(){

        //crete item with unique id
        const newItem = {
          id: 1 + Math.random(),
          value:this.state.newItem.slice()
        };

        //copy of current list of item
        const list = [...this.state.list];

        //add new item to list
        list.push(newItem);

        //update item with new list and reset newitem input
        this.setState(
          {
            list,
            newItem:""
          }
        );
      }

      deleteItem(id){

        //copy current list of item
        const list = [...this.state.list];

        //filter out item being deleted
        const updatedList = list.filter( item => item.id !== id);

        this.setState({
          list: updatedList
        });
      }

      render(){

        return(
          <div className="App" >
            <div className = "content">
                 <h3 className="heading">Add an items...</h3>

                    <div className= "main-box">
                    <input
                      className="input"
                      type="text"
                      placeholder="Add your task.."
                      value={this.state.newItem}
                      onChange={e=> this.updateInput("newItem", e.target.value)}
                    />

                    <br/><br/>

                    <button
                      
                      className="my-button"
                      onClick={()=> this.addItem()}
                      
                    >
                      Add..
                    </button>

                    <br/>
                    <ul className="list-items">
                      {this.state.list.map( item=>{
                        return(
                          <li key={item.id}
                            className="task-order"
                          >
                            {item.value}
                            <button 
                            className="delete-button"
                            onClick={()=> this.deleteItem(item.id)}
                            >Done</button>
                          </li>
                        )
                      })}
                    
                    </ul>

                    </div>


            </div>
               
          </div>
        );
      }
    }

export default App;
