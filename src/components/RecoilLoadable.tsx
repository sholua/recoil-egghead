import { atom, useRecoilState, selector, useRecoilValueLoadable } from 'recoil';
import { fetchWeather } from '../api/weatherApi';

const cityAtom = atom({
  key: 'city',
  default: '',
});

const weatherSelector = selector({
  key: 'weatherSelector',
  get: ({ get }) => {
    const city = get(cityAtom);
    return fetchWeather(city);
  },
});

const Weather = () => {
  const { state, contents } = useRecoilValueLoadable(weatherSelector);

  switch (state) {
    case 'hasValue':
      return contents; // val
    case 'hasError':
      return contents.message; // error msg
    case 'loading':
      return 'Loading weather...';
    default:
      return '';
  }
};

export default function RecoilLoadable() {
  const [currentCity, setCurrentCity] = useRecoilState(cityAtom);

  return (
    <div className="App">
      <h2>Enter City:</h2>
      <input
        value={currentCity}
        onChange={(e) => {
          setCurrentCity(e.target.value);
        }}
      />
      <h4>
        <Weather />
      </h4>
    </div>
  );
}
