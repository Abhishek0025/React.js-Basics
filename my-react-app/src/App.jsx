import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

//React.js allows resuability of components. It is the most basic utility of this framework

//PROPS: Read-ony properties that are shared between components
//       A Parent component can send data to a child component
//       <Component key=value>

//propTypes: A mechnaism that ensures that the passed value is of correct data-type
//           age: propTypes.number

//defaultProps: It is the default value of props in case they are not passed from the parent component
//              name: "Guest"

//Conditional Rendering: Allows the user to control what gets rendered in the application based on conditions (show, hide or change components)
function App() {
  const fruits = [{id: 1, name: "apple", calories: 23}, 
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "grape", calories: 159},
                    {id: 5, name: "papaya", calories: 37}];

  const vegetables = [{id: 6, name: "beans", calories: 75}, 
                      {id: 7, name: "beetroot", calories: 25},
                      {id: 8, name: "carrot", calories: 15},
                      {id: 9, name: "peas", calories: 59},
                      {id: 10, name: "potato", calories: 137}];

    return(
      <>
        {/* <Header></Header> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Button />
        <Student name="Abhishek A" age={30} isStudent={true}/> 
        <Student name="Neha B" age={22} isStudent={false}/>
        <Student name="Hari" age={23} isStudent={false}/>
        <Student name="Akshay" age={25} isStudent={true}/>
        {fruits.length > 0 && <List items={fruits} category="Fruits" />}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
        <UserGreeting isLoggedIn={true} username="Abhishek Arunkumar"/>
        {/* <Food></Food>
        <Footer></Footer> */}
      </>
    )
}

export default App
