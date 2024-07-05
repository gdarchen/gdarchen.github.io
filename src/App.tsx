import { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  const [searchParams] = useSearchParams();

  const redirectParam = searchParams.get('redirect');
  const mustRedirect = !redirectParam || redirectParam === 'true';

  useEffect(() => {
    if (!mustRedirect) {
      alert('This website is an old version.\nPlease check https://gautierdarchen.fr instead.');
      return;
    }
    alert('This website is an old version.\nYou are going to be redirected to the new one.');
    window.location.href = 'https://gautierdarchen.fr';
  }, [mustRedirect]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
