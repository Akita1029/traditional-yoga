import React from "react";
import "react-multi-carousel/lib/styles.css";
import Grid from '@mui/material/Grid';
import { Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FE6731',
      main: '#FE6731',
      dark: '#FE6731',
      contrastText: "#fff" //button text white instead of black
    },
  },
});

const ProfileLeftView = (props) => {

  const selectedItem = 0;

  return (
    <ThemeProvider theme={theme}>
      <Grid container columnSpacing={5} rowSpacing={1} direction="column">
        <Grid item>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              borderRadius: 2,
              maxWidth: 500,
              flexGrow: 1,
              borderColor: "#FE6731"
            }}
          >
          </Paper>
        </Grid>
        <Grid item>
          <Button fullWidth color="primary" variant="{{selectedItem == 0 ? 'contained' : 'outline'}}" sx={{
            borderRadius: 2,
          }}>DONATIONS</Button>
        </Grid>
        <Grid item>
          <Button fullWidth color="primary" variant="{{selectedItem == 1 ? contained : outline}}" sx={{
            borderRadius: 2,
          }}>DONATIONS</Button>
        </Grid>
        <Grid item>
          <Button fullWidth color="primary" variant="{{selectedItem == 2 ? contained : outline}}" sx={{
            borderRadius: 2,
          }}>DONATIONS</Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ProfileLeftView;