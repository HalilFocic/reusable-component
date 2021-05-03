import "./App.css";
import Button from "./component/Button";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-row">
          <Button color="primary">Primary</Button>
          <Button color="primary" size="md" variant="outline">
            Primary
          </Button>
          <Button color="primary" size="md" variant="text">
            Primary
          </Button>
        </div>
        <div className="container-row">
          <Button color="secondary">Secondary</Button>
          <Button color="secondary" size="md" variant="outline">
            Secondary
          </Button>
          <Button color="secondary" size="md" variant="text">
            Secondary
          </Button>
        </div>
        <div className="container-row">
          <Button color="danger">Danger</Button>
          <Button color="danger" size="md" variant="outline">
            Danger
          </Button>
          <Button color="danger" size="md" variant="text">
            Danger
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
          <Button color="danger" startIcon="settings">
            Start Icon
          </Button>
          <Button color="danger" endIcon="settings">
            End Icon
          </Button>
          <Button color="danger" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
