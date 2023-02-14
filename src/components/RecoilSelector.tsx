import { atom, selector, useRecoilValue } from 'recoil';

const priceList = {
  bread: 2,
  juice: 3,
  milk: 4,
};

const order = atom({
  key: 'order',
  default: ['bread', 'juice', 'milk', 'bread', 'milk'],
});

const orderInfo = selector({
  key: 'orderInfo',
  get: ({ get }) => {
    return {
      totalPrice: get(order)
        .map((food) => priceList[food as keyof typeof priceList])
        .reduce((current, sum) => current + sum, 0),
    };
  },
});

function RecoilSelector() {
  const myOrder = useRecoilValue(order);
  const orderStats = useRecoilValue(orderInfo);

  return (
    <div>
      <h1>The Brunch Place</h1>
      {myOrder.map((food, i) => (
        <p key={i}>{food}</p>
      ))}
      <h4>Total Price: ${orderStats.totalPrice} </h4>
    </div>
  );
}

export default RecoilSelector;
