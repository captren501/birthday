import List from "./Components/List";
import data from "./utils/data";
import { useState } from "react";

function App() {
    const [people, setPeople] = useState(data)
    const removePerson = (id)=>{
        let newPeople = people.filter((person)=>person.id !== id);
        setPeople(newPeople);
    };

    return(
    <main>
        <section className="container">
            <h3>{people.leneth} birthdays today</h3>
            <List people={people} remove={removePerson}/>
            <div className="buttons">
                <button onClick={()=>setPeople([])}>Clear All</button>
                <button onClick={()=>setPeople(data)}>Reset</button>
            </div>
        </section>
    </main>
    )
}

export default App;