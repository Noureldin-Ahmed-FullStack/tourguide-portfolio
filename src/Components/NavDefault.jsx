import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { Tab, Tabs, ThemeProvider, createTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function NavDefault() {
    const pages = [
        {text:'Home',path:''}, {text:'Tours',path:'Tours'}, {text:'Gallery',path:'Gallery'}, {text:'About Me',path:'About'}, {text:'Contact',path:'Contact'}];
    const settings = ['Home', 'Tours', 'Gallery', 'About Me', 'Contact'];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    let navigate = useNavigate()

    const location = useLocation();
    const currentPath = location.hash.replace('#', '');
    const getTabValue = (pathname) => {
        switch (pathname) {
            case './':
                return 1;
            case '/tours':
                return 2;
            case '/gallery':
                return 3;
            case '/about':
                return 4;
            case '/contact':
                return 5;
            default:
                return 1;
        }
    };
    const GoToPage = (link) => {
        navigate(link);
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ boxShadow: 'none', top: '2rem', borderBottom: { xs: 1, md: 0 } }} color='transparent' position="absolute">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            className='noAnchorDefaults'
                            component="a"
                            href="./"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            AHMED
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem component={Link} to={`/`+page.path} key={page.text} onClick={handleCloseNavMenu}>
                                        <Typography className='MyLink' textAlign="center">{page.text}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            className='noAnchorDefaults'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            AHMED
                        </Typography>
                        <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>
                            <Tabs
                                value={getTabValue(location.pathname)}
                                variant="scrollable"
                                indicatorColor="secondary"
                                sx={{
                                    borderBottom: 1, borderColor: 'divider',
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
                                <Tab onClick={() => GoToPage('./')} label="HOME" value={1} />
                                <Tab onClick={() => GoToPage('./tours')} label="TOURS" value={2} />
                                <Tab onClick={() => GoToPage('./gallery')} label="GALLERY" value={3} />
                                <Tab onClick={() => GoToPage('./about')} label="ABOUT ME" value={4} />
                                <Tab onClick={() => GoToPage('./contact')} label="CONTACT" value={5} />
                            </Tabs>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
