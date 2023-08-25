import "./styles.css";
import React from "react";

const loadComponent = () => import("../components");
const LazyComponent = React.lazy(loadComponent);

function App() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      <React.Suspense fallback={<p></p>}>
        {show && <LazyComponent />}
      </React.Suspense>
    </div>
  );
}

export default App;
