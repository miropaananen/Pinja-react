import './App.css';
import Form from './Form.js';

//Testing if the local storage works
/*
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
*/
/*
const data = JSON.parse(localStorage.getItem('data'));
console.log(data[0]);
*/
function App() {

  const data2 = JSON.parse(localStorage.getItem('data'));

  console.log(data2);

  return (
    <div className="App container">
      <Form></Form>
    </div>
  );
}

export default App;
