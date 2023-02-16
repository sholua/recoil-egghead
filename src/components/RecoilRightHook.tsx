import { useEffect } from 'react';
import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from 'recoil';

const count = atom({
  key: 'count',
  default: 0,
});

const CurrentCount = () => {
  useEffect(() => console.log('Rendered current count.'));

  const currentCount = useRecoilValue(count);

  return <p>Current count: {currentCount}</p>;
};

const IncrementButton = () => {
  const setCount = useSetRecoilState(count);

  useEffect(() => console.log('Rendered increment button.'));

  const incrementCounter = () => {
    setCount((count) => count + 1);
  };

  return <button onClick={incrementCounter}>+1</button>;
};

export default function RecoilRightHook() {
  return (
    <div>
      <h1>Counter</h1>
      <CurrentCount />
      <IncrementButton />
    </div>
  );
}
