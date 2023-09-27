import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useNavigate } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate=useNavigate();
  //const cartProduct=useSelector(state=>state.cart)
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={() => setOpen(!open)}>
  {theme.direction === 'ltr' ? (
    open ? <ChevronLeftIcon /> : <ChevronRightIcon />
  ) : (
    open ? <ChevronRightIcon /> : <ChevronLeftIcon />
  )}
</IconButton>

        </DrawerHeader>
        <Divider />
        <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>(navigate("/home"))}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
      <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>

<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>(navigate("/product"))}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
      <ProductionQuantityLimitsTwoToneIcon />
    </ListItemIcon>
    <ListItemText primary="Product" sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>

<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>(navigate("/commodity"))}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
      <ShoppingCartTwoToneIcon />
    </ListItemIcon>
    <ListItemText primary="Commodity"  sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>
<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>(navigate("/customer"))}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
      <AccountCircleIcon />
    </ListItemIcon>
    <ListItemText primary="Customer"  sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>
<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>(navigate("/order"))}>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
      <ListAltIcon />
    </ListItemIcon>
    <ListItemText primary="Order"  sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</ListItem>

        </List>
        <Divider />
   
      </Drawer>
      
    </Box>
  );
}