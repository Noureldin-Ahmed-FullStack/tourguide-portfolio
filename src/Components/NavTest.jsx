import { TabContext } from '@mui/lab'
import { Box, Tab,ThemeProvider, Tabs, createTheme } from '@mui/material'
import React from 'react'

export default function NavTest() {
    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs
                variant="scrollable"
                indicatorColor="secondary"
                textColor="inherit"
                scrollButtons
                allowScrollButtonsMobile
                 value={"1"} >
                    <Tab label="Item One" value={"1"} />
                    <Tab label="Item Two" value={"2"} />
                    <Tab label="Item Three" value={"3"} />
                    <Tab label="Item Three" value={"4"} />
                    <Tab label="Item Three" value={"5"} />
                    <Tab label="Item Three" value={"36"} />
                    <Tab label="Item Three" value={"7"} />
                    <Tab label="Item Three" value={"8"} />
                </Tabs>
            </Box>
        </ThemeProvider>
    )
}
