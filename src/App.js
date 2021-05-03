import "./App.css";
import Button from "./component/Button";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-row">
          <Button color="primary">Default</Button>
          <Button color="primary" size="md" variant="outline">
            Default
          </Button>
          <Button color="primary" size="md" variant="text">
            Default
          </Button>
        </div>
        <div className="container-row">
          <Button color="secondary">Default</Button>
          <Button color="secondary" size="md" variant="outline">
            Default
          </Button>
          <Button color="secondary" size="md" variant="text">
            Default
          </Button>
        </div>
        <div className="container-row">
          <Button color="danger">Default</Button>
          <Button color="danger" size="md" variant="outline">
            Default
          </Button>
          <Button color="danger" size="md" variant="text">
            Default
          </Button>
        </div>
        <div className="container-row">
          <Button color="default">Default</Button>
          <Button color="default" size="md" variant="outline">
            Default
          </Button>
          <Button color="default" size="md" variant="text">
            Default
          </Button>
        </div>

        <div className="container-row">
          <Button color="danger" size="sm">
            Small
          </Button>
          <Button color="danger" size="md">
            Medium
          </Button>
          <Button color="danger" size="lg">
            Large
          </Button>
        </div>
        <div className="container-row">
          <Button color="danger">Default</Button>
          <Button color="danger">Default</Button>
          <Button color="danger">Disabled</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
