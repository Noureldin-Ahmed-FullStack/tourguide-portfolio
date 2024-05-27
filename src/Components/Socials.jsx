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
            <a href="https://www.instagram.com/ahmed_russianguide_cairo_egypt" target='_blank'>
            <InstagramIcon className='MyLink' sx={{ fontSize: "2.3rem" }} />
            </a>
          </div>
        </Grid>
        <Grid item>
          <a className='MyLink FBLink'>
            <FacebookIcon className='' sx={{ fontSize: "2.3rem" }} />
          </a>
        </Grid>
        <Grid item>
          <a className='MyLink MailLink' href="mailto:noureldin2662002@gmail.com" target='_blank'>
            <MailOutlineIcon className='' sx={{ fontSize: "2.3rem" }} />
          </a>
        </Grid>
        <Grid item>
          <a className='MyLink whatsAppLink' target='_blank' href='https://wa.me/201117900555'>
            <WhatsAppIcon className='' sx={{ fontSize: "2.3rem" }} />
          </a>
        </Grid>
      </Grid>
    </div>
  )
}
