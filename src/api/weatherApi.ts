export const fetchWeather = async (location: string) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const parsedLocation = location.toLowerCase();
  let weather;

  switch (parsedLocation) {
    case 'new york':
      weather = '76';
      break;
    case 'anchorage':
      weather = '46';
      break;
    case 'paris':
      weather = '63';
      break;
    default:
      weather = 'City not found.';
  }

  return weather;
};
