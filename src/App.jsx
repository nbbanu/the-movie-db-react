import Header from "./components/Header";
import Banner from "./components/Banner";
import HorizantalMovieList from "./components/HorizantalMovieList";

const App = () => {
  // const [degiskenIsmim, degistirenFonksiyon] = useState("MALİK KORUCU");
  // const [name, setName] = useState("MALİK KORUCU");
  // const [numbers, setNumbers] = useState([]);
  // const [todos, setTodos] = useState([]);

  // const [inputValue, setInputValue] = useState("");

  // const inputRef = useRef();

  // const handleClick = () => {
  //   setName(name === "NURBANU KORUCU" ? "MALİK KORUCU" : "NURBANU KORUCU");
  //   const data = [1, 2, 3, 4, 5, Math.random()];
  //   setNumbers(data);
  // };

  // const addTodo = () => {
  //   const value = inputRef.current.value;

  //   //[1,2,3]
  //   const todosWillSet = [...todos];
  //   todosWillSet.push(value);
  //   setTodos(todosWillSet);

  //   setInputValue("");
  // };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <div>
      <Header />
      <div className="container">
        <Banner />
        <HorizantalMovieList type="trend" title="Trend"/>
        <HorizantalMovieList type="trailers" title="Latest Trailers"/>
        <HorizantalMovieList type="populers" title="What's Popular"/>
        <HorizantalMovieList type="free-ones" title="Free To Watch"/>
      </div>
      <>
        {/* <h1>{name}</h1>
      <div>
        {numbers.map((number) => (
          <span key={number}>
            <b>{number}</b>
            <br />
          </span>
        ))}
      </div>
      <button onClick={handleClick}>DEĞİŞTİR</button> */}

        {/* <input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        type="text"
      />
      <button onClick={addTodo}>Ekle</button>
      <div style={{ height: 400 }}>
        {todos.map((todo) => (
          <div style={{ color: "red" }}>*{todo}</div>
        ))}
      </div> */}
      </>
    </div>
  );
};

export default App;

// VIRTUAL DOM =>
// // state yönetimi

// let count = 0;

// button.addEventListener("click", () => {
//   count++;
// });
