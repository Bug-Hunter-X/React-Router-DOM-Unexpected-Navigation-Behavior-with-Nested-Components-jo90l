```javascript
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <p>Location: {location.pathname}</p> {/* Added to visually check location update */}
    </div>
  );
}

function About() {
  const location = useLocation();
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <p>Location: {location.pathname}</p> {/* Added to visually check location update */}
    </div>
  );
}
```