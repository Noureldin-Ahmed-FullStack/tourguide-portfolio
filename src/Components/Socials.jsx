import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid } from '@mui/material';
export default function Socials() {
  return (
    <div className='w-100 justify-content-center d-flex'>

      <Grid position={'absolute'} sx={{bottom:"3.5rem"}} container justifyContent={"center"} alignItems={"center"} spacing={7}>
        <Grid item justifyContent={"center"}>
          <InstagramIcon className='' sx={{ fontSize: "2.3rem" }} />
        </Grid>
        <Grid item>
          <FacebookIcon className='' sx={{ fontSize: "2.3rem" }} />
        </Grid>
        <Grid item>
          <MailOutlineIcon className='' sx={{ fontSize: "2.3rem" }} />
        </Grid>
        <Grid item>
          <WhatsAppIcon className='' sx={{ fontSize: "2.3rem" }} />
        </Grid>
      </Grid>
     </div>
  )
}
