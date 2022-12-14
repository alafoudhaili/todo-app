import axios from 'axios';
const apiUrl = "http//localhost:8080/api/task";

export function getTasks() 
{
    return axios.get(apiUrl);
}

export function addTasks(task)
{
    return  axios.post(apiUrl,task)
}

export function updateTasks(id,task)
{
    return axios.put(apiUrl + "/" + id,task)
}

export function deleteTasks(id)
{
    return axios.put(apiUrl + "/" + id)
}