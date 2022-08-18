import CreateTodoSection from './components/CreateTodoSection';
import TodoLists from './components/TodoLists';
import todoListsData from './database/todoListsData';

function App() {
  return (
    <div
      style={{
        padding: '3rem 0',
        margin: 'auto ',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '70%',
      }}
    >
      <CreateTodoSection />
      <hr />
      <TodoLists />
    </div>
  );
}

export default App;
