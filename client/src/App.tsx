import HomePage from './pages/features/homepage.tsx';
import { TaskProvider } from './utilities/context/TaskContext';
import { SnackbarProvider } from 'notistack';
import './App.css';

function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <TaskProvider>
        <HomePage />
      </TaskProvider>
    </SnackbarProvider>
  );
}

export default App;
