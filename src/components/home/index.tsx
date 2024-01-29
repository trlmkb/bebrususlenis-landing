import * as React from 'react';
import { motion, AnimateSharedLayout, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Contacts from './../contact';
import classNames from 'classnames/bind';
import styles from './home.module.css';
import { contentItemVariants, backgroundVariants, contentInnerVariants } from '../../utilities/constants';
import Button from '../button';
import Logo from '../logo';

const logoVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  }
}

const cx = classNames.bind(styles);

interface HomeProps {
  isLoaded: boolean;
}

const transition = { duration: 1 }

const Home = ({ isLoaded }: HomeProps) => {
  const [isConactOpen, setIsContactOpen] = React.useState(false);

  const handleContactsToggle = () => {
    setIsContactOpen(!isConactOpen)
  };

  return (
    <AnimateSharedLayout>
      <motion.div layout className={cx('wrapper')}>

        <AnimatePresence>
          {isConactOpen &&
            <>
              <Contacts toggleContacts={handleContactsToggle} />
              <motion.div
                layoutId="contacts"
                initial="closed"
                animate="open"
                variants={backgroundVariants}
                className={cx('background')}
              />
            </>
          }
        </AnimatePresence>

        <motion.div className={cx('content')}>
          <motion.div variants={contentInnerVariants} animate="open" initial="closed">
            <div className={cx('content-inner')}>
              <motion.div variants={contentItemVariants} className={cx('preHeading')}>
                <motion.span>Jau greitai</motion.span>
              </motion.div>
              <motion.h1
                className={cx('logo')}
                animate="open"
                initial="closed"
                variants={logoVariants}
              >
                <Logo />
              </motion.h1>
              <h1 className={cx('heading')} hidden>
                <motion.span variants={contentItemVariants}>Bebrusų</motion.span>
                <motion.span variants={contentItemVariants}>slėnis</motion.span>
              </h1>
              <motion.p variants={contentItemVariants} className={cx('text')}>
                Ribotas skaičius pirmųjų pirkėjų galės įsigyti sklypus palankiausiomis sąlygomis. Kviečiame registruotis iš anksto ir pirmiesiems gauti išskirtinį pasiūlymą
              </motion.p>
            </div>

            <motion.div variants={contentItemVariants}>
              <Button
                onClick={handleContactsToggle}
                buttonLayoutId="contacts"
              >
                registruotis
              </Button>
            </motion.div>

            <div className={cx('contacts')}>
              <motion.a href="tel:+37061380351" variants={contentItemVariants} className={cx('contacts-item')}>+370 613 80351</motion.a>
              <motion.a href="mailto:info@bebrususlenis.lt" variants={contentItemVariants} className={cx('contacts-item')}>info@bebrususlenis.lt</motion.a>
            </div>

            <motion.img
              className={cx('sea-waves')}
              src="/assets/images/sea-waves.svg"
              variants={contentItemVariants}
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Home;
