import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid } from '@mui/material';
export default function Socials() {
  return (
    <div className='w-100 justify-content-center d-flex'>
      
      <Grid position={'absolute'} sx={{ bottom: "3.5rem" }} container justifyContent={"center"} alignItems={"center"} spacing={7}>
        <Grid item justifyContent={"center"}>
          <div className='InstaBG'>
            {/* <InstagramIcon className='' sx={{ fontSize: "2.3rem" }} /> */}
            <svg style={{ fontSize: "2rem" }} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10ducm7-MuiSvgIcon-root z-2" focusable="false" aria-hidden="true" viewBox="2 2 20 20" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
          </div>
        </Grid>
        <Grid item>
          <a className='MyLink FBLink'>
            <FacebookIcon className='' sx={{ fontSize: "2.3rem" }} />
          </a>
        </Grid>
        <Grid item>
          <a className='MyLink MailLink'>
            <MailOutlineIcon className='' sx={{ fontSize: "2.3rem" }} />
          </a>
        </Grid>
        <Grid item>
          <a className='MyLink whatsAppLink'>
            <WhatsAppIcon className='' sx={{ fontSize: "2.3rem" }} />
          </a>
        </Grid>
      </Grid>
    </div>
  )
}
