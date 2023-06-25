import Feed from "./components/Feed/Feed";
import style from "./App.module.scss";
function App() {
  return (
    <div className={style.app}>
      <h1>Feed messages</h1>
      <div className={style.wrapper}>
        <Feed />
      </div>
    </div>
  );
}

export default App;
