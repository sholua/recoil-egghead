import React from 'react';
import { selector, atom, useRecoilState } from 'recoil';
import { fetchWeather } from '../api/weatherApi';
import Weather from './Weather';

export const cityAtom = atom({
  key: 'city',
  default: 'New York',
});

export const weatherSelector = selector({
  key: 'getWeatherAPI',
  get: ({ get }) => {
    const city = get(cityAtom);
    return fetchWeather(city);
  },
});

export default function RecoilApiCall() {
  const [currentCity, setCurrentCity] = useRecoilState(cityAtom);

  return (
    <div>
      <p>
        Enter City:
        <input
          value={currentCity}
          onChange={(e) => {
            setCurrentCity(e.target.value);
          }}
        />
      </p>
      <React.Suspense fallback="Loading weather...">
        <Weather />
      </React.Suspense>
    </div>
  );
}
