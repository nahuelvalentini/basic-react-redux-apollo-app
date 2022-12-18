import './App.css';

import { AppTexts } from './App.texts';

function App() {
  return (
    <h1>{AppTexts.get('titleApp')}</h1>
  );
}
export default App;
