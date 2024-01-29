import * as React from 'react';
import ImagesLoaded from 'react-images-loaded';
import { motion } from 'framer-motion';
import Home from './components/home';
import './css/global.css';
import classNames from 'classnames/bind';
import styles from './App.module.css';

const cx = classNames.bind(styles);

export const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    document.querySelectorAll('video')[0].playbackRate = .5;
  }, [])

  const handleImagesLoaded = instance => {
    setLoaded(true);
  }

  return (
  <ImagesLoaded
    className={cx('main')}
    elementType={"main"}
    done={handleImagesLoaded}
    background
  >
    <video
      loop
      muted
      playsInline
      autoPlay
      poster="assets/images/video-background.jpg"
      className={cx('background-video')}
    >
      <source src="assets/video/background.mp4" type="video/mp4" />
    </video>
    <img
      src="assets/images/video-background.jpg"
      className={cx('background-image')}
    />
    <motion.div
      className={cx('main-border')}
    />
    <motion.div
      className={cx('main-border')}
    />

    <Home isLoaded={loaded} />
  </ImagesLoaded>
)};
