import * as React from "react";
import classNames from 'classnames/bind';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { checkVariants, boxVariants, tickVariants } from '../../utilities/constants';
import styles from './check.module.css';

const cx = classNames.bind(styles);

interface CheckProps {
  isChecked: boolean;
}

const transition = { duration: 1 }

const Check = ({ isChecked }: CheckProps) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.svg className={cx('check')}
      animate="visible"
      initial="hidden"
      variants={checkVariants}
      viewBox="0 0 440 440"
      >
      <motion.path
        d="M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z"
        fill="transparent"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#151515"
        variants={boxVariants}
        style={{ pathLength, opacity }}
        transition={transition}
      />
      <motion.path
        d="M 0 128.666 L 128.658 257.373 L 341.808 0"
        transform="translate(54.917 88.332) rotate(-4 170.904 128.687)"
        fill="transparent"
        strokeWidth="15"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        transition={transition}
        style={{ pathLength, opacity }}
      />
      <motion.path
        d="M 0 128.666 L 128.658 257.373 L 341.808 0"
        transform="translate(54.917 68.947) rotate(-4 170.904 128.687)"
        fill="transparent"
        strokeWidth="15"
        stroke="#23ce97"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        transition={transition}
        style={{ pathLength, opacity }}
      />
    </motion.svg>
  );
};

export default Check;
