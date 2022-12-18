import './App.css';
import { AppTexts } from './App.texts';
import BasicChartComponent from './components/BasicChart/BasicChart.component';

function App() {
  return (
    <>
      <h1>{AppTexts.get('titleApp')}</h1>
      <BasicChartComponent/>
    </>
  );
}
export default App;
