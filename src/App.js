import style from "./App.module.scss";
import Feed from "./components/Feed/Feed";
function App() {
  return (
    <div className={style.app}>
      <Feed />
    </div>
  );
}

export default App;
