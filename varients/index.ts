export const fromTopToBottom = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
};

export const defaultOptions = {
    reverse: true,
    max: 20,
    perspective: 1000,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1,
};
