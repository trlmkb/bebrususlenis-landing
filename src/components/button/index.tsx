import * as React from 'react';
import {motion} from 'framer-motion';
import classNames from 'classnames/bind';
import styles from './button.module.css';
import { buttonBorderVariants} from '../../utilities/constants';

const cx = classNames.bind(styles);

interface ButtonProps {
  onClick(): void;
  buttonLayoutId?: string;
  titleLayoutId?: string;
  children?: React.ReactNode;
  altBackground?: boolean;
  type?: "reset" | "button" | "submit";
}

const Button = ({ onClick, buttonLayoutId, titleLayoutId, children, type, altBackground }: ButtonProps) => (
  <motion.div
    className={cx('wrapper')}
    whileHover="hover"
  >
    <motion.div
      className={cx('background', {'-alt': altBackground})}
      initial="closed"
      layoutId={buttonLayoutId}
    />
    <motion.button onClick={onClick} className={cx('button')} type={type ?? "button"}>
      <motion.div className={cx('border')} variants={buttonBorderVariants} />
      <motion.div
        className={cx('inner')}
        layoutId={titleLayoutId}
      >
        {children}
      </motion.div>
    </motion.button>
  </motion.div>
);

export default Button;
