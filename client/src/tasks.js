import React , {Component} from 'react';
import {addTasks,
        getTasks,
        updateTasks,
        deleteTasks
    } 
        from './services/taskServices';

class Tasks extends Component{
    state = {tasks : [] , currentTask :""}
   async componentDidMount(){
    try {
        const {data} = await getTasks();
        this.setState({tasks:data});
    } catch (error) {
        console.log(error)
    }
   }

   handleChange = ({currentTarget:input}) =>{
    this.setState({currentTask:input.value});
   }
   handleSubmit = async (e) =>{
    e.preventDefault();
    const originalTasks = this.state.tasks 
    try {
        const {data} = await addTasks({task : this.state.currentTask});
        const tasks = originalTasks
        tasks.push(data)
        this.setState({tasks,currentTask:""});

    } catch (error) {
        console.log(error)

    }
   }

   handleUpadate  = async (currentTask) =>{
    const originalTasks = this.state.tasks
    try {
        const tasks = [...originalTasks]
        const index = tasks.findIndex((task) =>task._id === currentTask)
        tasks[index] = {...tasks[index]};
        tasks[index].completed = !tasks[index].completed;
        this.setState({tasks})
        await updateTasks(currentTask,{completed:tasks[index].completed})
    } catch (error) {
        this.setState({tasks:originalTasks})
        console.log(error)

    } 

   }

   handledelete = async (currentTask) =>{
    const originalTasks = this.state.tasks
    try {
        const tasks = originalTasks.filter(
            (task) => task._id !== currentTask
        );
        this.setState({tasks})
        await deleteTasks(currentTask)
    } catch (error) {
        this.setState({tasks:originalTasks})
        console.log(error)

    }
   }

}

export default Tasks ;