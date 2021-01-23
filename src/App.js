import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import RepositoriesContainer from './components/repositories-list/RepositoriesContainer';


function App() {
  return (
    <BrowserRouter>
      <Main></Main>
    </BrowserRouter>
  );
}

export default App;
 