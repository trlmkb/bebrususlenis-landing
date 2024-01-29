export const contentInnerVariants = {
  open: {
    transition: {
      staggerChildren: 0.09,
      type: "spring",
      delayChildren: .7,
      stiffness: 20,
      restDelta: 2,
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: .7,
      staggerDirection: -1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
};

export const buttonBackgroundVariants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0,
  }
};

export const buttonBorderVariants = {
  hover: {
    x: 5,
    y: 5
  },
}

export const homeBlockVariants = {
  closed: {
    opacity: 0,
    y: 20,
    x: -20
  },
  open: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: .5,
      duration: .6,
    }
  }
}

export const formContainerVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }
}

export const formItemVariants = {
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
}

export const formTitleVariants = {
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      duration: .3
    }
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: [[0.17, 0.67, 0.83, 1]]
    }
  }
}


export const statusVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    opacity: 1,
    transition: {
      // when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }
};

export const statusTextVariants = {
  closed: {
    y: 40,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .8
    }
  },
}

export const checkVariants = {
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    }
  },
  closed: {
    opacity: 0
  }
}

export const tickVariants = {
  visible: { pathLength: 1 },
  hidden: { pathLength: 0 },
};

export const boxVariants = {
  visible: {
    pathLength: 1,
    stroke: "#c6ecc6"
  },
  hidden: {
    pathLength: 0,
    stroke: "#dfdfdf",
  },
};

export const contentItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
}

export const contactsClose = {
  open: {
    opacity: 1,
    transition: {
      delay: .5
    }
  },
  closed: {
    opacity: 0,
  }
}

export const backgroundVariants = {
  open: {
    zIndex: 2,
  },
  closed: {
    zIndex: 0,
  }
}

export const treePathVariants = {
  open: {
    pathLength: 1,
    fill: "rgba(24, 147, 104, 1)",
    stroke: "rgba(24, 147, 104, 0)",
    strokeWidth: 0,
  },
  closed: {
    pathLength: 0,
    fill: "rgba(24, 147, 104, 0)",
    stroke: "rgba(24, 147, 104, 1)",
    strokeWidth: 2
  },
};

export const treePathTransition = {
  default: { duration: 2, ease: "easeIn" },
  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
  strokeWidth: { delay: 1.5, duration: .5 },
}

export const logoPathVariants = {
  open: {
    pathLength: 1,
    fill: "rgba(0,0,0, 1)",
    stroke: "rgba(0,0,0, 0)",
    strokeWidth: 0,
  },
  closed: {
    pathLength: 0,
    fill: "rgba(0,0,0, 0)",
    stroke: "rgba(0,0,0, .7)",
    strokeWidth: 1
  },
};

export const logoPathTransition = {
  default: { duration: 3, ease: "easeIn" },
  fill: { delay: .75, duration: .5, ease: [1,0,1,1] },
  strokeWidth: { delay: .75, duration: .5 },
}
