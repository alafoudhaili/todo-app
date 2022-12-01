import React from 'react';
import Tasks from './tasks';
import {Paper,TextField} from '@material-ui/core';
import { CheckBox,Button } from '@material-ui/core';
import './App.css';

class App extends Tasks{
  state = {tasks : [] , currentTask :""}
  render(){
    const {tasks} = this.state;
    return(<div className='App-flex'>
            <Paper elevation={3} className="container">
              <div className='heading'>Todo</div>
              <form onSubmit={this.handleSubmit} className="flex" style={{margin : "15px 0"}}>
                <TextField 
                variant="outlined" 
                size="small" 
                style={{width :"80px"}} 
                value={this.state.currentTask}
                required={true}
                onChange={this.handleChange}
                placeholder="Add New Task"
                />
                <Button
                style={{height:"40px"}}
                color="primary"
                variant="outlined" 
                type ="submit">
                  Add Task
                </Button>

              </form>
              <div>
                {tasks.map((task) =>(
                  <Paper key ={task._id} className="flex task_container">
                    <CheckBox
                     checked={task.completed}
                     onClick={()=> this.handleUpadate(task._id)}
                     color="primary"
                     />
                     <div className={task.completed ? "task line_through" :"task"}>{task.task}</div>
                     <Button 
                     onClick={(this.handledelete(task._id))}
                     color="secondary">
                      delete
                     </Button>
                  </Paper>
                ))}
              </div>
            </Paper>
          </div>)
      }

}
export default App;
