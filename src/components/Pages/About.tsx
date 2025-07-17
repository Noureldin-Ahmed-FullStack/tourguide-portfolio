import { useTranslation } from 'react-i18next';
import AboutHero from './AboutHero';
import Gallery from './Gallery';

export default function About() {
  const [t] = useTranslation("global");
  const items: any = t('about.items', { returnObjects: true });
  return (
    <div className='w-full relative'>
      <AboutHero />
      <div className='max-w-screen-lg mx-auto my-10 px-3'>
        <div className='sm:grid grid-cols-1 sm:grid-cols-3 gap-7 bg-neutral-800/50 p-2 rounded-md shadow-lg flex flex-col justify-center'>
          <img className='-scale-x-100 rounded col-span-1 w-full' src="https://res.cloudinary.com/dqijwldax/image/upload/v1752191792/TourGuideVideos/dad1_znkwnw.jpg" alt="profile picture" />
          <div className='col-span-2 text-start'>
            <h2>{t('about.welcome')}</h2>
            <p className='mt-3'>{t('about.describtion')}</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {items.map((item: any, index: number) => (
                <div className='bg-neutral-800 p-2 rounded-lg shadow-lg' key={index}>
                  <h6>{item.header}</h6>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h2 className='mb-3'>{t('about.Gallery')}</h2>
      <Gallery />
    </div>
  )
}
