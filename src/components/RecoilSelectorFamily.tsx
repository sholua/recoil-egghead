import { atom, selectorFamily, useRecoilValue } from 'recoil';
import { DateTime } from 'luxon';

const currentTime = DateTime.local();

const sortedTodoList = selectorFamily({
  key: 'sortedTodoList',
  get:
    (sortedType) =>
    ({ get }) => {
      const todos = [...get(todoList)];

      return sortedType === 'ASC'
        ? todos.sort(
            (a, b) => a.createdAt.toUnixInteger() - b.createdAt.toUnixInteger()
          )
        : todos.sort(
            (a, b) => b.createdAt.toUnixInteger() - a.createdAt.toUnixInteger()
          );
    },
});

const todoList = atom({
  key: 'todoList',
  default: [
    {
      name: 'buy milk',
      createdAt: currentTime,
    },
    {
      name: 'write a book',
      createdAt: currentTime.plus({ days: 1 }),
    },
    {
      name: 'do some exercise',
      createdAt: currentTime.plus({ days: 2 }),
    },
  ],
});

export default function App() {
  const sortOrder = 'ASC';
  const mySortedTodoList = useRecoilValue(sortedTodoList(sortOrder));

  return (
    <div className="App">
      <h1>Todo List</h1>
      {mySortedTodoList.map((item, index) => (
        <p key={index}>
          {item.name} - {item.createdAt.toISODate()}
        </p>
      ))}
    </div>
  );
}
