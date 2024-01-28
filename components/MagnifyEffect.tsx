"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";

export default function MagnicEffect({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function mouseLeave() {
        setPosition({ x: 0, y: 0 });
    }
    function mouseMove(e) {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
            ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    }
    const { x, y } = position;
    return (
        <motion.div
            {...props}
            animate={{ x, y }}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseMove}
            ref={ref}
        >
            {children}
        </motion.div>
    );
}
