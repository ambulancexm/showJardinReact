import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Title from './components/Title';
import ToDoList from './components/ToDoList';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddTask from './components/AddTask';
import initialData from './init/initialData';
import Connexion from './pages/Connexion';
import Graphique from './pages/Graphique';
import GraphiqueClass from './pages/GraphiqueClass';

class App extends Component {

  state ={
    tasks : initialData,
  }

  onToggleCompleted =(taskid) =>{
    let taskToUpdate = this.state.tasks.find(task => task.id === taskid)
      taskToUpdate.completed = !taskToUpdate.completed
   
      this.setState(prevState => {
        prevState.tasks.map(task =>{
          return task.id === taskid ? taskToUpdate : task
        })
      }
    )
  }

  render() {
    return (
      <section className="App">
        <Title/>
        <BrowserRouter>
          <Switch>
            <Route path="/add-task" component={AddTask}/>
            <Route path="/connexion" component={Connexion}/>
            <Route path="/chart" component={Graphique}/>
            <Route path="/chart2" component={GraphiqueClass}/>
            <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData} onToggleCompleted={this.onToggleCompleted}/>}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
