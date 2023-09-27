import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../../Store/auth';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UserLogin } from '../../../Service/userService';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const centerStyle = {
  position: 'relative',
  top: '50%',
  left: '37%',
};

const Login: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const vertical = 'top';
  const horizontal = 'right';
  const navigate = useNavigate();
 const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget as HTMLFormElement);
    const customer_phone = data.get('mobile') as string;
    const customer_password = data.get('password') as string;
    const customerData = {
      customer_phone: customer_phone, 
      customer_password: customer_password, 
    };
    try {
      const response=await UserLogin(customerData);
      console.log("from server",response)
      // const responseData = await response.json(); 
      dispatch(loginSuccess(response));
      navigate('/customer');
    } catch (error) {
      setOpen(true);
      console.error('Login error:', error);
    }
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

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
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Failed! Enter correct mobile number and password.
        </Alert>
      </Snackbar>
      <div
        style={{
          backgroundImage: `url(https://i.pinimg.com/1200x/45/07/fe/4507fea2b1e03827e039192630c252c2.jpg)`,
          backgroundSize: 'cover',
          height: '100vh',
          color: '#f5f5f5',
        }}
      >
        <Box sx={boxStyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundImage: `url(https://i.pinimg.com/1200x/45/07/fe/4507fea2b1e03827e039192630c252c2.jpg)`,
                  backgroundSize: 'cover',
                  marginTop: '40px',
                  marginLeft: '15px',
                  marginRight: '15px',
                  height: '63vh',
                  color: '#f5f5f5',
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
                    <Box sx={centerStyle}>
                      <Avatar sx={{ ml: '35px', mb: '4px', bgcolor: '#ffffff' }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h4">
                        Sign In
                      </Typography>
                    </Box>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <TextField
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile number"
                            name="mobile"
                            autoComplete="mobile"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <Grid container alignItems="center">
                            <Grid item xs={6}>
                              <FormControlLabel
                                sx={{ width: '60%' }}
                                control={
                                  <Checkbox
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                  />
                                }
                                label="Remember me"
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                variant="body1"
                                component="span"
                                onClick={() => {
                                  navigate('/reset-password');
                                }}
                                style={{ marginTop: '10px', cursor: 'pointer' }}
                              >
                                Forgot password?
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '5em', mr: '5em' }}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                              mt: '10px',
                              mr: '20px',
                              borderRadius: 28,
                              color: '#ffffff',
                              minWidth: '170px',
                              backgroundColor: '#FF9A01',
                            }}
                          >
                            Sign in
                          </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: '3em', mr: '3em' }}>
                          <Typography
                            variant="body1"
                            component="span"
                            style={{ marginTop: '10px' }}
                          >
                            Not registered yet?{' '}
                            <span
                              style={{ color: '#beb4fb', cursor: 'pointer' }}
                              onClick={() => {
                                navigate('loginmain/register');
                              }}
                            >
                              Create an Account
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Login;
