import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
const LoginPage = () => {
  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;