import * as React from 'react';
import classNames from 'classnames/bind';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import styles from './contacts.module.css';
import { useInput } from '../../hooks/useInput';
import {
  contactsClose,
  statusVariants,
  statusTextVariants,
  formContainerVariants,
  formTitleVariants,
  formItemVariants,
} from '../../utilities/constants';
import Button from '../button';
import Check from '../check';

const cx = classNames.bind(styles);

interface ContactsProps {
  toggleContacts(): void;
}

enum Choices {
  Choice1 = "50'000 - 70'000 EUR",
  Choice2 = "70'001 - 120'000 EUR",
}

const Contacts = ({ toggleContacts }: ContactsProps) => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ''
  );
  const [choice, setChoice] = React.useState(Choices.Choice1);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(true);

  const url = '/mail.php';

  const handleRepeatFormFill = () => {
    setFormOpen(true);
    setError(false);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setSuccess(false);
    setError(false);
  };

  const handleContactsClose = () => {
    if (!error && !success && !formOpen) {
      toggleContacts();
    }
  };

  const handleOnInvalid = (e: any) => {
    e.target.setCustomValidity(' ');
    if (e.target.id === 'phone') {
      e.target.setCustomValidity('Neteisingai įvestas telefono numeris');
    } else if (e.target.id === 'email') {
      e.target.setCustomValidity('Neteisingai įvestas elektroninis paštas');
    } else {
      e.target.setCustomValidity('Prašome užpildyti reikalaujamus laukelius');
    }
  };

  const handleOnInput = (e: any) => {
    e.target.setCustomValidity('');
  };

  const handleChoice = (e: any) => {
    setChoice(e.target.value);
    console.log(choice);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // test

    // if (name) {
    //   setError(false);
    //   setSuccess(true);
    //   setFormOpen(false);

    //   setTimeout(() => {
    //     handleFormClose();
    //   }, 2000);
    // }
    // else {
    //   setError(true);
    //   setSuccess(false);
    //   setFormOpen(false);
    // }

    // return;

    // test end;

    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        choice: choice,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        resetName();
        resetPhone();
        resetEmail();
        resetMessage();
        setError(false);
        setSuccess(true);
        setFormOpen(false);

        setTimeout(() => {
          handleFormClose();
        }, 2000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccess(false);
        setError(true);
        setFormOpen(false);
      });
  };

  return (
    <motion.div
      className={cx('contacts')}
      variants={formContainerVariants}
      initial="closed"
      exit="closed"
      animate="open"
      key="contacts"
    >
      <AnimatePresence onExitComplete={handleContactsClose}>
        {!error && !success && formOpen && (
          <motion.div
            className={cx('regular')}
            variants={statusVariants}
            animate="open"
            exit="closed"
            key="form"
          >
            <motion.div
              className={cx('contacts-title')}
              variants={formTitleVariants}
            >
              <span>registruotis</span>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.label
                htmlFor="name"
                className={cx('input-wrap')}
                variants={formItemVariants}
              >
                <motion.input
                  id="name"
                  name="name"
                  placeholder="Jūsų vardas"
                  className={cx('input-area')}
                  type="text"
                  {...bindName}
                />
                <motion.span className={cx('input-title')}>Vardas:</motion.span>
              </motion.label>
              <motion.label
                htmlFor="phone"
                className={cx('input-wrap')}
                variants={formItemVariants}
              >
                <motion.input
                  id="phone"
                  name="phone"
                  placeholder="+370..."
                  className={cx('input-area')}
                  type="number"
                  required
                  onInvalid={handleOnInvalid}
                  onInput={handleOnInput}
                  {...bindPhone}
                />
                <motion.span className={cx('input-title')}>
                  Telefono nr.:
                </motion.span>
              </motion.label>
              <motion.label
                htmlFor="email"
                className={cx('input-wrap')}
                variants={formItemVariants}
              >
                <motion.input
                  id="email"
                  name="email"
                  placeholder="el@pastas.lt:"
                  className={cx('input-area')}
                  type="email"
                  required
                  onInvalid={handleOnInvalid}
                  onInput={handleOnInput}
                  {...bindEmail}
                />
                <motion.span className={cx('input-title')}>
                  El. paštas:
                </motion.span>
              </motion.label>
              <motion.label
                htmlFor="choice"
                className={cx('input-wrap', 'input-wrap--radio')}
                variants={formItemVariants}
              >
                <AnimateSharedLayout>
                  <motion.span
                    className={cx('input-title', 'input-title--required')}
                  >
                    Dominantis sklypas (kaina):
                  </motion.span>
                  <span className={cx('radio-wrap')}>
                    <input
                      type="radio"
                      name="choice"
                      className={cx('radio-input')}
                      value={Choices.Choice1}
                      onChange={handleChoice}
                      checked={choice === Choices.Choice1}
                      required
                      id="choice1"
                    />
                    <label htmlFor="choice1" className={cx('radio-title')}>
                      {Choices.Choice1}
                    </label>
                    {choice === Choices.Choice1 && (
                      <motion.span
                        className={cx('radio-line')}
                        layoutId="line"
                      ></motion.span>
                    )}
                  </span>
                  <span className={cx('radio-wrap')}>
                    <input
                      type="radio"
                      name="choice"
                      className={cx('radio-input')}
                      value={Choices.Choice2}
                      onChange={handleChoice}
                      checked={choice === Choices.Choice2}
                      required
                      id="choice2"
                    />
                    <label htmlFor="choice2" className={cx('radio-title')}>
                      {Choices.Choice2}
                    </label>
                    {choice === Choices.Choice2 && (
                      <motion.span
                        className={cx('radio-line')}
                        layoutId="line"
                      ></motion.span>
                    )}
                  </span>
                </AnimateSharedLayout>
              </motion.label>
              <motion.label
                htmlFor="message"
                className={cx('input-wrap')}
                variants={formItemVariants}
              >
                <motion.textarea
                  id="message"
                  name="message"
                  placeholder="Jūsų žinutė.."
                  className={cx('input-area', '-textarea')}
                  {...bindMessage}
                ></motion.textarea>
                <motion.span className={cx('input-title')}>Žinutė:</motion.span>
              </motion.label>
              <motion.div
                variants={formItemVariants}
                className={cx('required-fields')}
              >
                <span>*</span> - privalomas užpildyti laukas
              </motion.div>
              <motion.div
                variants={formItemVariants}
                className={cx('submit-wrap')}
              >
                <Button type="submit" altBackground onClick={() => null}>
                  siųsti
                </Button>
              </motion.div>
            </form>
          </motion.div>
        )}
        {success && (
          <motion.div
            className={cx('success')}
            initial="closed"
            variants={statusVariants}
            key="success"
            animate="open"
            exit="closed"
          >
            <Check isChecked={success} />
            <motion.div
              variants={statusTextVariants}
              transition={{ delay: 0.8 }}
              className={cx('success-text')}
            >
              Žinutė išsiųsta sėkmingai!
            </motion.div>
          </motion.div>
        )}

        {error && (
          <motion.div
            className={cx('error')}
            initial="closed"
            variants={statusVariants}
            animate="open"
            exit="closed"
            key="error"
          >
            <motion.div
              variants={statusTextVariants}
              className={cx('error-text')}
            >
              Žinutės išsiųsti nepavyko! <br />
              Prašome bandyti &nbsp;
              <motion.button
                className={cx('error-button')}
                onClick={handleRepeatFormFill}
              >
                dar kartą {error}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={cx('contacts-close')}
        onClick={handleFormClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={contactsClose}
      >
        uždaryti
      </motion.button>
    </motion.div>
  );
};

export default Contacts;
