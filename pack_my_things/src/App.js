
import {useState} from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>

  );
}
function handleSubmit(e){
  e.preventDefault();
  if(!description) return;
}
function Logo() {
  return <h1> 🏝far Away</h1>;
}
function Form(){
  const [description, setDescription] = useState("");
  const [num, setNum] = useState(0);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select value={num} onChange={(e) =>{setNum(+e.target.value)}}>
        {/* we will create an array with the numbers from one to 20, and then we will loop over that array,
and basically create a list of option elements. */}

        {Array.from({length:20}, (_,i) => i + 1).map((num) => { return <option value = {num} key = {num}>{num}</option>})}
      </select>
      <input type="text" placeholder = "item..." value={description} onChange={(e) =>{setDescription(e.target.value)}}/>
      <button>Add</button>
    </form>
  );
}
function PackingList(){
  const renderedList = initialItems.map((item) =>{
    return <Item item = {item}/>
  });
  return <div className="list">
    <ul>{renderedList}</ul>
    </div>;
  
}

function Item({item}){
  return <li><span style={item.packed ? {textDecoration: 'line-through'}: {}}>
    {item.quantity} {item.description}
    </span><button>❌</button></li>
}
function Stats(){
  return <footer className="stats">
    <em>
      You have X left!
    </em>
  </footer>
}

export default App;
