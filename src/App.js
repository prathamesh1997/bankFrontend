import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import { CalcMain} from "./components"

function App() {
  return (
    <ThemeProvider theme={theme}>
       <CalcMain/>
   </ThemeProvider>
  );
}

export default App;
