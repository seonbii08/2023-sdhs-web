import Words from "./components/Words";
function App() {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return <Words />;
}

export default App;
