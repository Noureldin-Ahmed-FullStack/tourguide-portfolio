import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import FlightIcon from '@mui/icons-material/Flight';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { Badge, Tab, Tabs, ThemeProvider, Zoom, createTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function NavDefault() {
    const [t, i18n] = useTranslation("global");
    const navText: any = t('nav', { returnObjects: true });
    const [CurrentLang, setCurrentLang] = useState(i18n.language);
    const changeLanguage = () => {
        console.log(i18n.language);
        i18n.language == 'en' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en')
        setCurrentLang(i18n.language)
        // i18n.changeLanguage(lang)
    }
    const pages = [
        { text: navText[0], path: '' }, { text: navText[1], path: 'Tours' }, { text: navText[2], path: 'Gallery' }, { text: navText[3], path: 'About' }, { text: navText[4], path: 'Contact' }];
    const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
    // const [anchorElUser, setAnchorElUser] = useState(null);
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };
    let navigate = useNavigate()

    const location = useLocation();
    const getTabValue = (pathname: string) => {
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
    const GoToPage = (link: string) => {
        navigate(link);
    }
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const theme = createTheme({
        palette: {
            mode: 'dark'
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ boxShadow: 'none', top: '2rem', borderBottom: { xs: 1, md: 0 }, zIndex: '4' }} color='transparent' position="absolute">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <FlightIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            className='noAnchorDefaults MyLink'
                            component="a"
                            href="./"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit !important',
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
                                    <MenuItem component={Link} to={`/` + page.path} key={page.text} onClick={handleCloseNavMenu}>
                                        <Typography className='MyLink' textAlign="center">{page.text}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <FlightIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to='/'
                            className='noAnchorDefaults MyLink'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit !important',
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
                                <Tab onClick={() => GoToPage('./')} label={navText[0]} value={1} />
                                <Tab onClick={() => GoToPage('./tours')} label={navText[1]} value={2} />
                                <Tab onClick={() => GoToPage('./gallery')} label={navText[2]} value={3} />
                                <Tab onClick={() => GoToPage('./about')} label={navText[3]} value={4} />
                                <Tab onClick={() => GoToPage('./contact')} label={navText[4]} value={5} />
                            </Tabs>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip TransitionComponent={Zoom} title={t('tooltips.langtooltip')}>
                                <Badge badgeContent={CurrentLang} color='primary'>
                                    <LanguageIcon onClick={changeLanguage} className='languageIco' sx={{
                                        transition: 'transform 0.3s ease',
                                        cursor: "pointer",
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                        }
                                    }} />
                                </Badge>

                                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
                                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                {/* </IconButton> */}
                            </Tooltip>
                            {/* <Menu
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
                            </Menu> */}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
