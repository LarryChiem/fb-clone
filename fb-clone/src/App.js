import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from"./Login";

function App() {
  const user = null;

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header /> 
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
