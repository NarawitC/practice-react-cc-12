import CreateTodoSection from './components/CreateTodoSection';
import TodoLists from './components/TodoLists';
import todoLists from './database/todoLists';

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
      <TodoLists todoLists={todoLists} />
    </div>
  );
}

export default App;
