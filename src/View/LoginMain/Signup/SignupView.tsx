import React, { useState } from 'react';
//import Sidebar from '../../Common/SideNav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Footer from '../../Common/Footer';
import bgimg from './bg/backimg.jpg';
import bg from './bg/signin.svg'


import {
  Button,
  TextField,
  Container,
  Avatar,
 
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Checkbox,
  Grid,
  Stack,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const center = {
  position: 'relative',
  top: '50%',
  left: '30%',
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data:any) => {
    setOpen(false);
    console.table(data); 
    navigate('/'); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  function TransitionLeft(props: any) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please fix the validation errors.
        </Alert>
      </Snackbar>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: 'cover',
          height: '100vh',
          color: '#f5f5f5',
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
            <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  marginTop: "40px",
                  marginLeft: "15px",
                  marginRight: "15px",
                  height: "63vh",
                  color: "#f5f5f5",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: 'cover',
                  height: '70vh',
                  minHeight: '500px',
                  backgroundColor: '#3b33d5',
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box sx={center}>
                      <Avatar
                        sx={{ ml: '85px', mb: '4px', bgcolor: '#ffffff' }}
                      >
                     
                      </Avatar>
                      <Typography component="h1" variant="h4">
                        Create Account
                      </Typography>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            rules={{
                              required: 'Username is required',
                            }}
                            render={({ field }:any) => (
                              <TextField
                                {...field}
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoComplete="username"
                                error={!!errors.username}
                                helperText={errors.username?.message}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                              required: 'Email is required',
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                              },
                            }}
                            render={({ field }:any) => (
                              <TextField
                                {...field}
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
  <Controller
    name="mobileNumber"
    control={control}
    defaultValue=""
    rules={{
      required: 'Mobile number is required',
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Invalid mobile number (10 digits)',
      },
    }}
    render={({ field }:any) => (
      <TextField
        {...field}
        required
        fullWidth
        id="mobileNumber"
        label="Mobile Number"
        name="mobileNumber"
        autoComplete="tel"
        error={!!errors.mobileNumber}
        helperText={errors.mobileNumber?.message}
      />
    )}
  />
</Grid>

<Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
  <Controller
    name="password"
    control={control}
    defaultValue=""
    rules={{
      required: 'Password is required',
      minLength: {
        value: 4,
        message: 'Password must be at least 4 characters long',
      },
    }}
    render={({ field }:any) => (
      <TextField
        {...field}
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
    )}
  />
</Grid>

<Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
  <Controller
    name="confirmPassword"
    control={control}
    defaultValue=""
    rules={{
      required: 'Confirm Password is required',
      validate: (value) =>
        value === getValues('password') || 'Passwords do not match',
    }}
    render={({ field }:any) => (
      <TextField
  {...field}
  required
  fullWidth
  id="confirmPassword"
  label="Confirm Password"
  name="confirmPassword"
  type="password"
  
  error={!!errors.confirmPasswordr}
  helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
/>

    )}
  />
</Grid>

                        <Grid item xs={12} sx={{ ml: '5em', mr: '5em' }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                              mt: '15px',
                              mr: '20px',
                              borderRadius: 28,
                              color: '#ffffff',
                              minWidth: '170px',
                              backgroundColor: '#FF9A01',
                            }}
                          >
                            Register
                          </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: '10px' }}
                            >
                              Already have an Account?{' '}
                              <span
                                style={{ color: '#beb4fb', cursor: 'pointer' }}
                                onClick={() => {
                                  navigate('/');
                                }}
                              >
                                Sign In
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </form>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
