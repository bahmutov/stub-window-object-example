import style from './app.module.scss'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import { useAppSelector } from './store/hooks'

function App() {
  const todos = useAppSelector((state) => state.todos.data)
  const pendingTasks = todos.length

  // @ts-ignore
  if (window.Cypress) {
    // @ts-ignore
    window.todos = todos
  }

  return (
    <div className={style['container']}>
      <h1>Todo App</h1>
      <TodoForm />
      <Todos />
      <span className={style['pending']}>
        There is <span data-cy="pending-count">{pendingTasks}</span> pending
        tasks
      </span>
    </div>
  )
}

export default App
