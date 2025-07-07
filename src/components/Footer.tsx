import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Tooltip, Zoom } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function Footer() {
    const [t] = useTranslation("global");
    const socials: any = t('socials.FollowMe', { returnObjects: true });
    return (
        <footer className=" text-white py-10 !pb-2 px-6 absolute w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 border-gray-300/30">
                <div className="flex flex-row gap-6 md:gap-16 justify-center md:justify-end">
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
                        <div className='hover:bg-blue-700 rounded transition-all duration-300 px-2 py-1'>
                            <a href="https://www.instagram.com/ahmed_russianguide_cairo_egypt" className='no-underline hover:text-inherit text-inherit' target='_blank'>
                                <div className="flex items-center gap-2">
                                    <FacebookIcon className='MyLink' sx={{ fontSize: "2.1rem" }} />
                                    <span>Facebook</span>
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

                <div className="md:pl-16 border-t border-l-0 md:border-t-0 md:border-l border-gray-300/30 pt-6 md:pt-0 text-center md:text-left">
                    <div className="mb-4">
                        <h5 className="font-semibold">Email</h5>
                        <p className="text-sm text-gray-300">yourmail@email.com</p>
                    </div>
                    <div>
                        <h5 className="font-semibold">Skype</h5>
                        <p className="text-sm text-gray-300">live:yourname.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400 text-sm">
                <p>© 2025 Ahmed Asila</p>

            </div>
        </footer>
    )
}
