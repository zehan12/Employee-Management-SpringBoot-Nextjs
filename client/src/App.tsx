import { Fragment } from "react/jsx-runtime";
import Navbar from "./components/navbar/navbar";
import AddEmployee from "./components/employee/add-employee";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="my-6 p-3 w-full flex justify-center">
        <AddEmployee />
      </div>
    </Fragment>
  );
}

export default App;
