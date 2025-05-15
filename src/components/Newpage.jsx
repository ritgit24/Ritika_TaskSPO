// // import { useNavigate } from "react-router-dom";
// // import './Newpage.css'
// // import React from "react";

// // const Newpage = () => {
// //     return(
// //         <div>
// //              <button>Signup</button><br></br><br></br>
// //              <button>Login</button>
// //         </div>
// //     );
// // };


// // export default Newpage; 

// import React, { useState } from 'react';
// import { 
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Insights', path: '/insights' },
//     { name: 'Resources', path: '/resources' },
//     { name: 'Calendar', path: '/calendar' },
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const drawer = (
//     <div
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//       style={{ width: 250 }}
//     >
//       <Typography variant="h6" sx={{ p: 2 }}>
//         SPO IIT Kanpur
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem 
//             button 
//             key={item.name}
//             component={Link}
//             to={item.path}
//           >
//             <ListItemText primary={item.name} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <AppBar position="static" elevation={0} sx={{ backgroundColor: 'primary.main',
//         width: '100%',   /* Ensure it spans full width */
//         left: 0,         /* Position from left edge */
//         right: 0,        /* Position from right edge */
//         zIndex: theme.zIndex.drawer + 1  }}
//         >
//       <Toolbar>
//         <Typography 
//           variant="h6" 
//           component={Link}
//           to="/"
//           sx={{ 
//             flexGrow: 1,
//             textDecoration: 'none',
//             color: 'inherit',
//             fontWeight: 'bold'
//           }}
//         >
//           SPO IIT Kanpur
//         </Typography>

//         {isMobile ? (
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Drawer
//               anchor="right"
//               open={drawerOpen}
//               onClose={toggleDrawer(false)}
//             >
//               {drawer}
//             </Drawer>
//           </>
//         ) : (
//           <div>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 color="inherit"
//                 component={Link}
//                 to={item.path}
//                 sx={{ 
//                   mx: 1,
//                   '&:hover': {
//                     backgroundColor: 'primary.dark'
//                   }
//                 }}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';
// import Insights from ".src/components/Insights.jsx"

import './Newpage.css'

const Newpage = () => {
    const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'For Companies', path: '/forcompanies' },
    { name: 'About IITK', path: '/aboutiitk' },
    { name: 'Contact', path: '/contact' },
  ];

const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250 }}
    >
      <Typography 
        variant="h6" 
        sx={{
          p: 2,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: '1.3rem',
          color: (theme) => theme.palette.primary.main,
          textAlign: 'center'
        }}
      >
        SPO IIT Kanpur {Date.now()}
      </Typography>
      <Divider />
    <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name}
            component={Link}
            to={item.path}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
    <AppBar 
      position="fixed"  
      elevation={0} 
      sx={{ 
        backgroundColor:  '#00BFFF',
        opacity:0.4,
        width: '100%',  
        left: 0,         
        right: 0,        
        zIndex: theme.zIndex.drawer + 1  
      }}
    >
      <Container maxWidth="false" sx={{ padding: 0 }}>  
        <Toolbar disableGutters sx={{ px: 2 }}>  
          <Typography 
            variant="h6"
            component={Link}
            to="/" 
            sx={{ 
              flexGrow: 1,
              textDecoration: 'none',
            //   color: 'inherit',
            color: '#000000',
            
            fontFamily : "Segoe UI Black",
            fontWeight: 'bold',
              ml: { xs: 0, sm: 2 }  ,
              '&:hover': {
      color: '#008B8B',
      transform: 'translateY(-2px)',
      '&::after': {
        width: '100%',
        left: 0,
      }
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      width: '0%',
      height: '2px',
      backgroundColor: '#008B8B',
      transition: 'all 0.3s ease',
    },
    transition: 'all 0.3s ease',
            }}
          >
            SPO IIT Kanpur
            <img src="https://www.iitk.ac.in/smss/post/spo_2021/featured.png" class="letsgo" />
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"  /* Changed from 'start' to 'end' */
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 1 }}  /* Add some margin */
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <div>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ 
                    // color: '#000000',
                    // px: 3,  /* Increased horizontal padding */
                    // '&:hover': {
                    //   backgroundColor: 'primary.dark',
                    // },
                    // fontSize: '1rem'
                    color: 'black',
                    margin : '20px',
                    fontFamily : 'Segoe UI Black',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light overlay
      color: '#008B8B', // Yellow text on hover
      // Additional hover effects:
      transform: 'scale(1.05)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      margin : '20px',
    },
    transition: 'all 0.3s ease',
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    <div><h1>For the students</h1>
    <h3>A collection of resources for students at IIT Kanpur.</h3>
    <button class="py" onClick={() => navigate('/insightshehe')}> Insights</button>
    <button class="py" onClick={() => navigate('/resources')}>Resources</button>
    <button class="py" onClick={() => navigate('/roadmaps')}>Roadmaps</button>
    <button class="py" onClick={() => navigate('/procedures')}>Procedures</button>
    <button class="py" onClick={() => navigate('/faqs')}>FAQs</button>
    

<div class="circle2" >
  <p class="text">Present your resume with confidence</p>
</div>
<div class="circle2" >
  <p class="text">Your achievements matter!</p>
</div>
<div class="circle2" >
  <p class="text">Keep a track of your projects</p>
</div>
<div class="circle2" >
  <p class="text">Focus on all aspects</p>
</div>
<div class="circle">
  <p class="text">Realise your interests!</p>
</div>


<div class="circle2" >
  <p class="text">Manage your time</p>
</div>
<div class="circle2" >
  <p class="text">Execution is the tool,not procastination</p>
</div>
<div class="circle2" >
  <p class="text">Stay Calm,Reach out</p>
</div>
<div class="circle2" >
  <p class="text">Prepare well for interviews</p>
</div>
<div class="circle">
  <p class="text">Confidence is the key ! </p>
</div>
    </div>
    </>
  );
};

export default Newpage;