import style from './app.module.scss'
import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import { useAppSelector } from './store/hooks'
import _config from './Config'

let Config = _config

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.Config = Config
  // @ts-ignore
  Config = window.Config
}

function App() {
  const todos = useAppSelector((state) => state.todos.data)
  const pendingTasks = todos.length

  // @ts-ignore
  if (window.Cypress) {
    // @ts-ignore
    window.todos = todos
  }

  return (
    <div className={style.container}>
      <h1>{Config.title}</h1>
      <TodoForm />
      <Todos />
      {Config.showCount && (
        <span className={style['pending']}>
          There is <span data-cy="pending-count">{pendingTasks}</span> pending
          tasks
        </span>
      )}
    </div>
  )
}

export default App
