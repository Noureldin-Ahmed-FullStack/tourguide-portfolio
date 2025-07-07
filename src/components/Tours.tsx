import MyCarousel from './MyCarousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../css/Tours.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Tours() {
    const [t] = useTranslation("global");
    return (
        <div className='myDarkBG py-5 relative'>
            <div className="z-10 ">
                <h3>{t('Tours.Header')}</h3>
                <span>{t('Tours.subtext')}</span>
            </div>
            <div>
                <MyCarousel />
            </div>
            <Link to='/Tours' className='browseLink'>{t('Tours.Browse')} <KeyboardDoubleArrowRightIcon /></Link>
        </div>
    )
}
