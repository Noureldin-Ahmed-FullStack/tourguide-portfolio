import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Tooltip, Zoom } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useTranslation } from 'react-i18next';
import ContactForm from './ui/ContactForm';
import { useLocation } from 'react-router-dom';
export default function Footer() {
    const location = useLocation();
    const [t] = useTranslation("global");
    const socials: any = t('socials.FollowMe', { returnObjects: true });
    return (
        <footer className={"text-white flex flex-col items-center py-10 !pb-2 px-6 absolute w-full " + (location.pathname == '/about' && 'bg-neutral-800/30')}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 border-gray-300/30">
                <div className="flex flex-row gap-6 md:gap-16 justify-center md:justify-end items-center">
                    <div className="space-y-4 ">
                        <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={socials[0]}>
                            <div className='InstaBG px-2 py-1'>
                                <a href="https://www.instagram.com/ahmed_russianguide_cairo_egypt" className='no-underline hover:text-inherit text-inherit' target='_blank'>
                                    <div className="flex items-center gap-2">
                                        <InstagramIcon className='MyLink' sx={{ fontSize: "2.1rem" }} />
                                        <span>Instagram</span>
                                    </div>
                                </a>
                            </div>
                        </Tooltip>
                        <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={socials[1]}>
                            <div className='hover:bg-red-600 rounded transition-all duration-300 px-2 py-1'>
                                <a href="https://www.instagram.com/ahmed_russianguide_cairo_egypt" className='no-underline hover:text-inherit text-inherit' target='_blank'>
                                    <div className="flex items-center gap-2">
                                        <EmailOutlinedIcon className='MyLink' sx={{ fontSize: "2.1rem" }} />
                                        <span>Mail me</span>
                                    </div>
                                </a>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="space-y-4 ">
                        <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={socials[2]}>
                            <div className='hover:bg-green-500 rounded transition-all duration-300 px-2 py-1'>
                                <a href="https://www.instagram.com/ahmed_russianguide_cairo_egypt" className='no-underline hover:text-inherit text-inherit' target='_blank'>
                                    <div className="flex items-center gap-2">
                                        <WhatsAppIcon className='MyLink' sx={{ fontSize: "2.1rem" }} />
                                        <span>Whatsapp</span>
                                    </div>
                                </a>
                            </div>
                        </Tooltip>
                        <Tooltip arrow followCursor={true} placement='top' TransitionComponent={Zoom} title={socials[3]}>
                            <div className='hover:bg-blue-500 rounded transition-all duration-300 px-2 py-1'>
                                <a href="https://www.instagram.com/ahmed_russianguide_cairo_egypt" className='no-underline hover:text-inherit text-inherit' target='_blank'>
                                    <div className="flex items-center gap-2">
                                        <TelegramIcon className='MyLink' sx={{ fontSize: "2.1rem" }} />
                                        <span>Telegram</span>
                                    </div>
                                </a>
                            </div>
                        </Tooltip>
                    </div>
                </div>

                <ContactForm />
            </div>

            <div className="mt-10 text-center text-gray-400 text-sm">
                <p>© 2025 Ahmed Asila</p>

            </div>
        </footer>
    )
}
