import React, { useState } from 'react';
import TodoApp from './app/components/TodoApp/TodoApp';
import TodoEdit from './app/components/TodoApp/TodoEdit';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import TodoAdd from './app/components/TodoApp/TodoAdd';
import { FormControlLabel, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { Grid, ThemeProvider, responsiveFontSizes, CssBaseline, Switch as SwitchMaterial } from '@material-ui/core';

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? '#1c0605' : '#2e2f33';
  const mainSecondaryColor = darkState ? '#9e082b' : '#b31d38';
  const mainInfoColor = darkState ? '#0c750f' : '#0c9110';
  const mainSuccess = darkState ? '#ffffff' : '#000000';
  const switchText = darkState ? 'Light Theme' : 'Dark Theme';
  const darkTheme = responsiveFontSizes(createMuiTheme({
    overrides: {
      MuiButton: {
        text: {
          color: '#f7f8fa',
        },
      },
    },
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
      info: {
        main: mainInfoColor,
      },
      success: {
        main: mainSuccess,
      }

    },
    typography: {
      body1: {
        fontSize: 16
      }

    },
  }));
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container direction="column">
        <BrowserRouter>
          <Grid item>
            <FormControlLabel control={<SwitchMaterial checked={darkState} onChange={handleThemeChange} />} label={switchText} />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
              <Switch>
                <Route path="/" exact >
                  <Redirect to="/todos" />
                </Route>
                <Route path="/todos" exact component={TodoApp} />
                <Route path="/todos/create" exact component={TodoAdd} />
                <Route path="/todos/:id" exact component={TodoEdit} />
              </Switch>
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  );
}
export default App;
