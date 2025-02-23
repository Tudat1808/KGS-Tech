import React from 'react';
import {Box, CssBaseline } from '@mui/material';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import HomePage_Component from '../Management_Components/HomePage_Component';

const drawerWidth = 240;

const HomePage = () => {
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Management_Header />
            <Management_DrawerComponent />
            <HomePage_Component/>
        </Box>
    );
};

export default HomePage;