import { useRecoilValue } from 'recoil';
import { weatherSelector } from './RecoilApiCall';

export default function Weather() {
  const currentWeather = useRecoilValue(weatherSelector);

  return (
    <div>
      <p>Weather: {currentWeather}</p>
    </div>
  );
}
