import React  from "react";
import './App.css';

const App = () => {
    let name: string;
    name = "Sameera";

    let hobbies: string[];
    hobbies = ['coding ','cooking ','swimming '];

    let role: [number , string];
    role = [1,'1'];

    type Person = {
        name: string;
        age?: number;
    }
const person: Person = {
name: 'Sameera',
}
console.log(person)
    
return (
    <>
        <p>Hello World</p>
 <p>{name} , {hobbies}</p>
    </>

)

}
export default App;