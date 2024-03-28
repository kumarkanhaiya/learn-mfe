import './App.css';
import './ErrorBoundry'

const RemoteApp = React.lazy(() => import("Remote/App"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

function App() {
  return (
    <div className="App">
      <h3>
        Hello from Container.
      </h3>
      <RemoteWrapper>
        <RemoteApp />
      </RemoteWrapper>
    </div>
  );
}

export default App;
