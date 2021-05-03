import "./App.css";
import Button from "./component/Button";

import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
function App() {
  return (
    <div className="App">
      <Button color="primary">Default</Button>
      <Button color="primary" size="md" variant="outline">
        Default
      </Button>
      <Button color="primary" size="md" variant="text" disabled>
        Default
      </Button>
    </div>
  );
}

export default App;

{
}
