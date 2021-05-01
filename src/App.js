import "./App.css";
import Button from "./component/Button";

import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
function App() {
  return (
    <div className="App">
      <Button size="md" color="default" startIcon="local_grocery_store">
        Default
      </Button>
      <Button
        size="md"
        color="primary"
        startIcon="local_grocery_store"
        endIcon="navigation"
      >
        Default
      </Button>
      <Button size="md" color="secondary">
        Default
      </Button>
      <Button size="md" color="danger">
        Default
      </Button>
    </div>
  );
}

export default App;

{
}
