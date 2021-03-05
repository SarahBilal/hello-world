import logo from './logo.svg';
import './App.css';
import Greeting from './Components/greeting'
import Welcome from './Components/welcome'
import Hello from './Components/Hello';
import Subscribe from './Components/subscribe';
import Counter from './Components/counter';
import ClassClick from './Components/classClick'
import EventBind from './Components/BindEvent'
import UserGreeting from './Components/UserGreeting';
import ParentComponent from './Components/ParentComponent'
import ComplexList from './Components/ComplexList';
import StyleSheet from './Components/StyleSheet'
import Form from './Components/Form';
function App() {
  return (
    <div className="App">
      <Greeting name= "Bilal" heroName="Superman">
        <p>This is Children props. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat tenetur dolores laudantium placeat. Aia assumenda est libero ex labore maiores amet perspiciatis laboriosam, facere vitae!</p>
      </Greeting>
      <Greeting name="Sarah" heroName="Wonder Woman">
        <button>Press Me</button>
      </Greeting>
      <Greeting name="Amelia" heroName="PowerPuff Girl"/>
       <Welcome name="Elyana" heroName="Mojojo"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus repellat eligendi distinctio corporis, quod impedit quasi ut saepe dolores! Mollitia.</p></Welcome>
      <Hello></Hello>
      <Subscribe></Subscribe>
      <Counter></Counter>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
      <UserGreeting></UserGreeting>
      <ParentComponent></ParentComponent>
      <ComplexList></ComplexList>
      <StyleSheet></StyleSheet>
      <Form></Form>

    </div>
  );
}

export default App;
