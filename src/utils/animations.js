export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

export const slideUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 60, opacity: 0 }
};

export const slideDown = {
    initial: { y: -60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -60, opacity: 0 }
};

export const slideIn = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 }
};

export const scaleUp = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const cardHover = {
    initial: { scale: 1 },
    hover: { 
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

export const buttonHover = {
    initial: { scale: 1 },
    hover: { 
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
};

export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 }
}; 