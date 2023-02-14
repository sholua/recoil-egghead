import { atom, useRecoilState } from 'recoil';

const shoppingList = atom({
  key: 'shoppingList',
  default: ['milk', 'juice', 'eggs'],
});

function RecoilState() {
  const [myShoppingList, setShoppingList] = useRecoilState(shoppingList);

  const removeItem = (item: string) => () => {
    const itemIndex = myShoppingList.findIndex((element) => element === item);
    setShoppingList([
      ...myShoppingList.slice(0, itemIndex),
      ...myShoppingList.slice(itemIndex + 1),
    ]);
  };

  const addItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setShoppingList([...myShoppingList, event.currentTarget.value]);
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input onKeyDown={addItem} />
      <br />
      <ul>
        {myShoppingList.map((item, index) => (
          <li key={index} onClick={removeItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecoilState;
