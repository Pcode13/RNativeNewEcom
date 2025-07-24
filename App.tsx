import React, { FC } from 'react';

import ThemeView from './src/views/ThemeView';
import { ThemeProvider } from './src/context/ThemeContext';

interface Props {}

// const url = 'http://192.168.22.112:5555/';
// const Theme: ReactNavigation.Theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: '#ffffff',
//   },
// };

const App: FC<Props> = () => {
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then(res => console.log(res.data))
  //     .catch(e => console.error(e));

  //   //using Fetch method

  //   // fetch(url, {
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'content-type': 'application/json',
  //   //   },
  //   // })
  //   //   .then(result => {
  //   //     if (!result.ok) {
  //   //       const errorRes = result.json();
  //   //       console.error(errorRes);
  //   //     } else {
  //   //       const res = result.json();
  //   //       console.warn(res);
  //   //     }
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //   });
  // }, []);

  // return <AppNavigator/>
  return (
    <ThemeProvider>
      <ThemeView />
    </ThemeProvider>
  );
};

export default App;
