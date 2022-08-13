import React from 'react';
import { BrowserRouter as Router, Routes , Route , Navigate} from 'react-router-dom';
import Global from "./components/Global";
function App() {

  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/Home"}/>} />
        <Route path="/Home" element={<Global />} />
      </Routes>
    </Router>
  </>
  );
}
function Test() {
  return (
    <>hello world</>
  )
}
export default App;
