
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '../css/navbar.css'
import React from 'react'
import { AppBar, Container, Link, Tabs, ThemeProvider, Typography, createTheme } from "@mui/material";

export default function Navbar() {

    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <nav data-bs-theme="dark" className="navbar w-100 bg-transparent my-5">
                <Box
                    sx={{ borderBottom: 1, borderColor: 'divider', }}
                    className="container-fluid"
                >

                    <Box sx={{ width: '100%', display: "flex", alignItems: 'center', justifyContent: { xs: 'center !important', md: 'space-evenly !important' } }}>
                        <Typography
                            sx={{ display: { xs: 'none', md: 'inherit' }, fontWeight: '800' }}
                            component={"a"} className="navbar-brand"
                            href="#">Navbar</Typography>
                        <Tabs
                            value={"1"}
                            variant="scrollable"
                            indicatorColor="secondary"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#e51f1f',
                                },
                                '& .MuiTab-root.Mui-selected': {
                                    color: 'white',
                                    fontWeight: 'bold',
                                  },
                            }}
                            textColor="inherit"
                            scrollButtons
                            allowScrollButtonsMobile
                            aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item four" value="4" />
                            <Tab label="Item five" value="5" />
                            <Tab label="Item six" value="6" />
                            <Tab label="Item seven" value="7" />
                            <Tab label="Item eight" value="8" />
                            <Tab label="Item nine" value="9" />
                        </Tabs>
                        <Box sx={{ display: { xs: 'none', md: 'inherit' }, opacity: '0' }}>Ahmed Asila</Box>
                    </Box>

                </Box>
            </nav>
            {/* <Container maxWidth="xl">
            </Container> */}
        </ThemeProvider>
    )
}
