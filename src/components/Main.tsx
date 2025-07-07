import { createTheme, ThemeProvider } from '@mui/material'
import BigBG from './BigBG'
import Discover from './Discover'
import Footer from './Footer'
import Tours from './Tours'

export default function Main() {
  const theme = createTheme({
      palette: {
          mode: 'dark'
      },
  });
    return (
        <>
            <ThemeProvider theme={theme}>
                <BigBG />
                <Tours />
                <Discover />
                <Footer />
            </ThemeProvider>
        </>
    )
}
