"use client";
import { motion, Variants } from "framer-motion";

import style from "./component.module.css";

const drawParams: Variants = {
  offscreen: {
    pathLength: 0,
    opacity: 0,
  },
  onscreen: {
    pathLength: 1,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 6,
    },
  },
};

const PikesPeak = () => {
  return (
    <motion.svg
      viewBox="0 0 1082.97 243.85"
      xmlns="http://www.w3.org/2000/svg"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={style.pikesPeak}
    >
      <motion.path
        fill="var(--blue)"
        stroke="var(--cream)"
        strokeWidth={3}
        variants={drawParams}
        d="M559.46,1.32c5.33-1.57,11.34-2.08,16.48.4,3.44,0,7.08.13,10.15,1.87,2.75,1.74,4.91,4.39,7.94,5.71,4.47,1.33,9.14,2.04,13.45,3.91,4.94,2.21,10.5.41,15.58,1.55,4.44,4.87,9.74,8.78,15,12.7,3.85,3.61,8.99,5.48,12.59,9.38,3.18,2.82,5.31,6.85,9.28,8.74,6.8,3.47,14.43,4.78,21.5,7.61,5.36,2.59,11.82,1.21,16.84,4.72,2.52-.86,5.2-2.11,7.92-1.34,3.29,1.44,5.1,4.84,8.1,6.73,2.15,1,4.83.78,6.71,2.43,2.73,2.17,5.11,4.86,8.24,6.51,4.62,2.68,10.19,2.78,14.88,5.31,4.04,2.11,8.81,2.37,12.63,4.97,3.44-1.58,6.7-4.55,10.76-3.84,3.48.24,6.37,3.49,9.98,2.43,3.99-.84,8.09-.63,12.15-.67,4.37-.11,7.65,3.55,11.99,3.78,5.3.67,9.65,4.29,14.88,5.11,4.38-.19,8.78-.2,13.16-.54,4.38-.31,8.76-4.57,12.89-1.22,1.29-.45,2.61-.91,3.93-1.36,4.68,3.63,11.49,3.83,15.09,8.87,2.68,3.54,6.87,5.24,10.47,7.64,4.17,3.53,9.46,6.09,11.74,11.38,3.92-2.31,8.62-.66,12.76-2.18,4.13-1.48,8.55-2.11,12.46-4.18,1.7-1.07,3.66-.09,5.49.04,2.33.48,4.61-.45,6.87-.9,5.68-1.4,11.72.69,17.3-1.4,2.88-4.45,6.22-9.14,11.7-10.49,1.67.88,3.18,2.05,4.75,3.13,1.11-2.04,1.98-4.29,3.6-6,1.92-1.59,4.27-.3,6.16.61,3.34-.37,5.88,1.86,8.69,3.21,7.68,2.64,15.74,4.18,23.88,4.2,1.43-.38,2.79-1.01,4.19-1.56,5.86,2.85,11.93,5.31,17.45,8.81,3.64,2.28,7.77,3.58,11.47,5.76,6.07,3.34,11.56,7.64,16.65,12.32,3.41,3.13,7.75,4.88,11.72,7.16,7.31,4.44,14.74,8.89,20.5,15.32,1.31,4.16,2.79,8.29,3.54,12.61-3.64-.34-5.69-3.56-8.22-5.73-3.79-3.48-9.04-4.76-12.82-8.22-4.4-3.97-8.82-7.98-13.95-10.99-3.59-2-5.98-5.55-9.64-7.43-4.03-2.2-7.37-5.5-11.58-7.38-4.79-2.16-9.76-3.88-14.52-6.1-.92,4.28,2.01,9.45-1.71,12.83-3.59-5.91-5.29-12.71-7.32-19.26-.87-.41-1.72-.81-2.57-1.21-5.56,1.43-11.23-.19-16.84-.36,1.33,3.94,4.06,7.24,5.11,11.28.61,2.16,1.51,4.22,2.53,6.22,4.72.74,9.67,1.52,13.56,4.54,4.8,3.8,9.08,8.25,14.04,11.86,2.67,1.87,5.72,3.37,7.77,6.01,2.72,3.42,4.91,7.24,7.78,10.56,3.28,3.95,9.78,2.59,12.77,6.91,4.51,5.29,6.51,12.09,10.44,17.74,1.17,1.64,1.91,3.52,2.31,5.5-2.12-.47-4.19-1.07-6.24-1.67,2.41,2.87,5.96,5.39,6.12,9.48-6.03.06-11.58-2.51-17.25-4.19-4.82-1.41-8.98-4.29-13.35-6.65-3.83-1.81-5.11-6.32-8.65-8.47-2.56-1.7-5.14-3.44-6.92-5.99-2.3-3.34-5.83-5.64-7.8-9.21-2-3.36-4.09-6.66-6.22-9.93-2.66-4.15-7.25-6.35-11.09-9.2-.35,5.94-1.46,11.79-2.71,17.59.39,8.08,2.88,15.91,5.04,23.67-1.72.13-3.1-.8-4.03-2.16-4.86-6.23-10.02-13.19-9.83-21.5-.32-3.12,2.52-4.96,4.51-6.82.39-5.38,3.04-11.29-.15-16.3-1.47-2.88-4.72-4.69-5.29-8.01-.77-4.07-1.11-8.23-2.6-12.13-.79-1.46-.56-2.96.08-4.41,2,.89,4,1.73,6.05,2.56-1.98-3.14-4.03-6.23-5.83-9.47-2.72-.58-5.4-1.33-8.05-2.13-2.11,2.44-4.78,4.29-7.73,5.56,1.21,3.1,2.95,5.97,4.01,9.14-.43.42-1.28,1.26-1.71,1.68-3.42-3.37-5.02-8.3-8.48-11.76-.35.54-1.03,1.62-1.37,2.16,1.05,5.63,2.88,11.07,4.65,16.5,1.09,3.3,4.94,4.94,5.45,8.51.63,3.95,2.99,7.27,4.29,10.99,1.15,5.56,1.8,11.39.4,16.97-.82,2.61.43,5.2,1.45,7.56,3.18,6.39,3.12,13.79,2.83,20.76-.62-.26-1.85-.79-2.47-1.05-4.95-8.76-8.69-18.13-12.71-27.33-4.7-7.76-6.19-17.29-4.61-26.18-.96-3.31-3.11-6.2-3.58-9.67-1.03-4.19-.4-8.79-2.6-12.63-8.46,2.68-17.39,2.64-26.07,4.07-7.65,1.85-15.58,1.94-23.23,3.79-5.67,1.29-12.21,1.94-16.98-2.11-3.66,1.17-7.52,1.82-10.96,3.57-2.05,1.96-3.01,4.76-4.51,7.11,1.66,4.08,3.79,8.07,4.09,12.55,3.43,4.66,6.66,9.58,11.31,13.15,2.67-2.55,4.46-7.88,8.86-7.31,4.22,2,6.2,6.57,8.76,10.21,2.89,4.21,3.74,9.84,7.98,13.06,5.97,4.22,8.49,11.39,12.53,17.22,1.64-.54,3.57-1.42,5.05.01,5.17,4.3,8.9,9.99,12.73,15.45,4.88,6.63,7.09,14.94,12.96,20.9,5.05,7.47,14.4,9.65,20.6,15.88-2.95,3.93-8.33,2.56-12.48,2.06-3.86-1-8.76-.07-11.63-3.39-2.94-3.05-5.99-5.99-9.16-8.78-4.66-4.65-10.43-8.13-14.42-13.44-3.89-4.77-7.04-10.04-9.98-15.43-4.66-.73-6.9-5.35-8.18-9.38.69-2.02,2.99-1.02,4.54-1.15-.79-2.93-.6-6.44-2.92-8.69-3.75-4.31-7.17-8.88-10.87-13.21-3.17-3.64-4.88-8.2-7.06-12.44-2.09,2.15-3.61,5.05-6.26,6.55-2.4-.62-4.19-2.44-6.11-3.88-1.91.02-3.8.06-5.69.11.05,2.44,1.32,5.33-.56,7.4-2.4,3.3-4.84,6.57-7.01,10.02-2.73,4.46-7.6,7.07-10.08,11.73-4.1-.7-3.67-5.9-6.48-8.15-4.49-3.93-7.7-9.08-9.88-14.59-3.5,5.27-4.54,11.64-6.21,17.63-.47,2.95-3.65,4.11-5.26,6.33-2.43,3.5-3.65,7.65-5.03,11.63,5.65,3.29,11.71,5.8,17.16,9.48-.03.49-.08,1.48-.11,1.97-3.95.72-8.34,2.22-11.98-.32-4.16-2.86-7.78-6.55-12.48-8.59-3.42,2-6.92,3.95-9.67,6.86-1.45,1.53-4.32,2.97-5.9.88-.87-4.23-.47-9.66,3.7-12.06,5.99-3.91,10.4-9.67,16.14-13.89,1.13-1.02,2.83-1.74,3.08-3.41,1.47-7.07,5.46-13.23,9.12-19.34,1.23-1.82,2.26-4.05,4.41-4.95,2.64-.33,5.41.28,7.97-.69,4.05-1.24,6.59-4.89,9.48-7.75-3.65-.95-7.32-1.75-10.99-2.53-4.59-.82-8-4.23-11.51-7.01.84-4.28,3.59-7.83,4.74-12,.76-2.45,1-5.02,1.73-7.48,3.33-2.2,8.13,1.63,11.26-1.47-.18-2.09-.73-4.14-1.52-6.07-1.43-2.7-4.37-4.28-5.6-7.11-.74-2.95.14-6.23-1.74-8.86-4.26.75-8.83,1.2-12.9-.6-8.75-4.16-18.77-3.41-27.84-6.42-3.72-1.21-7.62-1.57-11.47-2.1-3.8,5.56-.02,12.33-.44,18.45-3.59.93-8.29.1-10.11,4.13,4.81,3.31,10.48,5.26,15.02,8.96.43,5.37-1.35,10.66-2.57,15.84-.84,3.27-4.94,2.69-7.48,3.33.02,4.31-.26,8.61-.86,12.88-5.57,1.5-11.39,1.39-17.08.86-.48,1.31-.93,2.62-1.4,3.93-4.16-.69-7.87-3.3-9.88-7.01-4.44-8.22-8.54-16.62-13.5-24.55-1.12-.03-2.22-.06-3.31-.09,3.16,8.1,5.02,16.61,7.9,24.8-3.2,1.92-6.26-.63-9.31-1.58-5.73-2.34-12.34-2.74-17.28-6.78-5.31-4.36-10.32-9.09-15.89-13.14-3.95-2.81-7.15-6.47-10.27-10.15.08-3.29,1.41-6.33,2.07-9.51.04-3.03-1.65-5.84-1.51-8.88.39-3.23,1.99-6.13,2.72-9.27-3.17-4.53-7.73-7.83-11.81-11.49-2.45-2.08-2.98-5.52-2.98-8.55,4.31.22,7.77,4.25,12.38,3.64,2.74.52,3.14-3.08,5.39-3.85,2.85-1.23,5.52-2.82,7.55-5.21-7.66-1.65-15.38-3.15-22.64-6.23.71,2.15,1.27,4.38,1.25,6.66-6.66-1.5-13.55-3.44-20.4-2.09,1.54,2.76,3.39,5.34,4.93,8.11,1.33,2.34,1.43,5.12,2.54,7.55,1.87,3.33,5.23,5.79,6.24,9.6,1.31,3.93-1.12,8.08.46,11.97,2.73,8.43,6.34,16.56,8.68,25.12.82,3.06-2.05,5.8-1.28,8.88,1.49,6.44,4.77,12.39,5.61,19.02-1.17,1.37-2.31,2.76-3.47,4.13-.42,5.51,1.92,10.55,3.32,15.73,3.21,4.32,8.97,5.68,11.92,10.18-8.59,8.18-19.42,14.24-31.13,16.42-8.39,1.7-16.21,6.47-25,5.63-12.33.54-24.67.07-36.99.61-7.33-.52-14.9.18-21.98-2.14-5.97-2.42-11.09-6.42-16.03-10.45-3.22-2.64-7-4.69-11.1-5.51-8.01.35-16.13,1.63-24.09.04-5.27-.72-10.22-2.79-15.41-3.81-6.81-1.43-13.58,1.32-20.42.53-2.9.06-7.13-1.29-8.76,1.97-4.8,9.1-8.74,18.63-13.13,27.94-1.64,4.2-6.89,4.31-9.98,7.01-5.71,4.55-11.97,8.42-17.21,13.54-1.86,1.66-4.08,3.8-6.81,2.79-3.36-1.4-7.13-3.68-7.81-7.57-.74-3.55-.93-7.23-.46-10.83.59-3.93,2.99-7.22,4.36-10.87.77-3.04.42-6.34,1.77-9.25,1.56-3.85,5.19-6.66,5.8-10.92.93-5.1,3.92-9.39,6.41-13.81,1.96-3.52,2.04-8.06,5.14-10.9,7.86-7.52,15.62-15.17,23.96-22.17,4.72-4.08,10.44-6.66,15.43-10.36,2.18-1.98,5.22-1.13,7.63-.11,7.91,3.57,15.36,8.06,22.23,13.35,6.8-5.76,14.04-11.12,19.43-18.34,3.82.11,6.08,3.45,9.1,5.25,5.84-1.35,10.62-5.21,15.93-7.76,3.07-1.65,6.58-.15,9.84-.79,1.95-.15,4.38-1.13,5.81.79,3.22,3.71,5.71,7.99,8.67,11.9,5.38-3.84,9.52-9.18,15.18-12.64,1.16-.68,2.54-1.65,3.94-.97,2.61,2,4.23,5.21,7.29,6.63,3.28.88,6.8.12,10.05,1.2,2.32.82,4.46,2.05,6.65,3.18,2.16-2.53,4.34-5.13,5.35-8.36-1.27-2.11-2.49-4.24-3.69-6.37-6.04-.9-11.91-5.41-18.08-2.96-2.5.78-4.97,1.65-7.5,2.3-3.24-5.21-8.77-8.68-14.44-10.72-3.7,1.73-7.35,3.61-11.18,5.04-6.41.39-13.35.83-19.22-2.3-1.23-.57-2.5-1.07-3.75-1.56-1.63,2.15-2.82,4.78-5.05,6.39-3.98.78-8.21.26-12.09-.82-2.07-1.83-3.21-5.59-1.78-8.13,3.01-1.47,6.36-2.12,9.31-3.74,4.76-2.56,10.35-1.75,15.54-1.86,10.06-.72,20.19-.44,30.19-1.88,3.54-.55,6.93-1.92,10.51-2.26,1.15.96,2.12,2.13,3.15,3.24,1.98-.2,4.09-1,6.05-.22,2.51,1.24,4.38,3.74,7.3,4.1,4.85.72,9.55,2.86,14.54,2.04.08-1.83.23-3.66.16-5.48-1.29-1.89-3.41-3.05-4.6-5-1.07-2.43-.82-5.15-.67-7.72,1.55.02,3.1.05,4.66.09-2.77-2.86-5.17-6.22-5.45-10.32,3.87-.42,7.78-.46,11.67-.31-2.77-2.58-4.6-5.91-6.2-9.28-5.87,2.34-11.42,5.42-17.44,7.35-3.44,1.41-6.5,3.63-10.03,4.82-3.78,1.19-7.76.09-11.59.67-4.27.93-8.29,2.74-12.11,4.82-3.6,1.96-7.95,1.44-11.61,3.27-3.05,1.07-5.79,3.53-9.17,3.27-.73-1.8.72-3.32,1.59-4.75,2.46-3.94,6.79-6.05,10.8-8.06,4.49-1.27,8.11-4.57,12.77-5.38,8.93-2.06,16.33-8.56,25.65-9.21,2.19-.1,4.13-1.18,6.02-2.21-1.43-1.79-4.08-3.37-3.36-6.02.08-3.76,2.52-7.56,1.17-11.24-2.41,4.02-3.63,8.88-7,12.25-.38-.05-1.15-.16-1.53-.21-.53-4.21.78-8.43.17-12.67,2.21-4.34,1.62-9.22,2.47-13.88-.96-.97-1.91-1.93-2.86-2.89-2.1.05-4.2.03-6.29.03-1.84-1.52-3.69-3.08-4.96-5.12-1.55-2.09-2.93-4.87-5.84-5.14-7.53-1.39-14.13-5.63-21.66-7.01.25,3.12.51,6.36-.95,9.26-1.56,3.25-1.97,7.26-4.41,9.96-2.12-.51-4.08-1.52-5.98-2.54-3.11-1.75-5.21-5.47-9.17-5.43-3.63-.42-5.67,3.46-8.96,4.19-2.52.54-5.1.35-7.63.12-.15-3.37.22-6.75,1.76-9.78-3.9,1.55-7.95,2.79-12.13,3.3-.89,5.71,1,11.26,1.41,16.91.22,1.36-.31,3.29-2.06,2.62-1.65-4.99-3.76-9.79-6.48-14.31-4.06,6.9-6.75,14.51-10.82,21.4-1.67,3.12-2.41,6.74-4.59,9.59-2.3,2.67-6.03,3.11-9.05,4.58-.28,5.34-2.79,10.26-6.28,14.22-2.42.51-2.8-1.97-3.3-3.7-.58-2.08-.73-4.39.5-6.27,2.4-4.33,2.05-9.43,3.26-14.1,2.23.12,4.36.84,6.35,1.85,1.12-.67,2.25-1.35,3.38-2.02.05-1.9.1-3.79.15-5.68,1.39-.91,3.03-1.55,4.18-2.79,2.32-8.09,7.61-14.87,10.48-22.76-1.91.67-4.56.63-5.49,2.79-4.18,7.4-8.81,14.53-13.58,21.55-.29,1.44-.49,2.89-.87,4.31-2.3.56-4.67-.11-6.99.15-3.52,1.94-4.81,6.09-6.59,9.45-.61-.03-1.83-.07-2.44-.1.35-5.86,4.01-10.68,5.72-16.14.89-2.22,1.13-5.16,3.63-6.21,2.81-1.27,4.58-3.76,6.14-6.31-4.04-.15-8.06.44-11.82,1.93.37,5.54-1.57,10.9-3.97,15.78l-.91.74c-.32-.28-.96-.83-1.28-1.11-.71-4.39-.55-8.86-.65-13.28-5.17,1.41-9.82,4.24-15.09,5.33-2.83.52-5.19,2.21-7.49,3.83,1.4,1.29,3.01,2.39,4.17,3.93.73,3.3-1.23,6.35-1.56,9.58,0,2.75,1.72,5.21,1.64,7.97-.32,2.05-1.18,3.95-1.88,5.89-.61.02-1.85.07-2.47.1.09-2.15.21-4.3.32-6.44-3.2.64-5.48,3.3-8.63,3.96-3.16-.97-3.78-4.89-5.61-7.29-.32,1.99-.6,4-.87,6,5.79,4.97,12.28,9.18,17.37,14.92,2.69,3.02,6.33,5.14,8.45,8.66,1.98,3.18,4.14,6.45,4.72,10.23.01,2.9-2.53,4.78-4.14,6.89,7.56,2.39,16.54-.19,23.22,5.05,2.88,2.09-.09,5.7-.9,8.22-2.9,7.56-9.27,13.81-17.19,15.85-7.56,2.45-15.55,3.01-23.15,5.35-4.94.84-8.69,4.34-12.9,6.75-1.52.94-4.32,1.12-4.67-1.13-1.3-5.07-.2-10.41,1.17-15.35,1.42-5.03,1.41-10.29,1.6-15.47-5.33-1.59-10.75-.78-16.08.13-3.07-1.44-5.83-3.67-7.9-6.35-1.44-4.93,1.62-10.02.38-15.06-1.2-5.7-2.23-12.37-7.56-15.75-5.05-5.37-11.14-9.54-16.61-14.47-2.45-.17-4.9-.25-7.35-.19.79,2.81,2.05,5.47,3.83,7.8,2.01,2.58,1.95,6.02,3.11,8.97,1.89,3.47,6.7,5.29,6.68,9.73.13,4.5.24,9.01.68,13.51-3.49-.71-3.95-4.59-5.45-7.2-1.54-3.61-5.15-5.74-6.68-9.35-1.21-2.91-5.44-3.66-5.55-7.12-.38-4.28-1.18-8.52-2.78-12.53-.77.25-2.32.74-3.09.99,2.56,5.04,4.58,10.38,5.85,15.89,1.08,7.77-4.36,14.97-2.66,22.81,2.01,5.75,7.04,9.66,10.94,14.06,2.22,8.98.32,18.57,2.56,27.61,1.11,2.84,4.14,3.84,6.85,4.47.5-4.77,1.38-9.48,2.24-14.2.95-4.57-3.81-7.67-4.18-11.99-.11-1.72,1.9-2.24,2.9-3.25.78-2.31,1.35-4.68,1.82-7.07,1.69-.09,4.17-.34,5.02,1.47.02,3-.83,5.92-.98,8.92-.58,4.25,3.37,7.68,2.52,11.96-.87,6.46-2.9,13.1-.66,19.55,6.02.99,11.41,4.05,17.33,5.41,7.56,2.33,14.99,5.52,21.54,9.99-1.44,3.63-3.94,6.83-7.77,8.07,2.51,2.45,6.49,4.11,7.69,7.54-2.36,2.49-4.16,5.6-6.74,7.81-7.84-.12-11.32-8.12-17.04-12.13-5.54-5.48-10.57-11.52-16.31-16.81-5.98-3.67-13.13-1.32-19.63-1.06-7.01.01-14.03.16-21.04.47-6.44,1.19-13.04,2.58-19.58,1.28-7.49,7.71-14.25,16.07-20.42,24.87-1.97,2.7-2.4,6.1-3.81,9.05-2.44,3.24-6.04,5.37-8.64,8.47-2.44,2.89-4.89,5.76-7.25,8.71-2.31,2.81-3.21,6.7-6.23,8.91-4.09-.41-7.49-3-10.81-5.21-2.2-1.77-5.46-.63-7.63-2.43-2.07-1.51-3.8-3.97-6.65-3.8-5.81-.39-11.36-2.24-17.03-3.39-7.44-.77-15.04.09-22.38-1.58-6.78-1.31-13.64,1.22-20.39-.02-5.24-1.6-10.82-2.99-14.91-6.86-6.99-4.6-11.24-12.04-17.39-17.57-5.07-4.35-10.79-7.86-15.91-12.16-2.64-2.32-5.97-3.53-9.06-5.09,2.22-2.44,5.64-4.64,8.85-2.47,1.17-1.98,1.27-6,4.35-5.56,2.24-.16,3.43,1.86,4.58,3.39,1.26-.54,2.52-1.08,3.78-1.61-.06-2.55.07-5.11-.26-7.64-.87-5.15-6.76-7.69-7.19-13.01-.69-5.02-3.71-9.82-2.97-14.94,1.64-.61,2.83.97,4.02,1.79,2.87,2.59,5.93,4.96,9.37,6.76,4.25,2.3,6.84,6.78,11.23,8.86,3.11,1.5,6.77.7,9.92,2.04,6.77,3.47,11.38,9.93,18.38,13.06,1.47-4.12,3.7-8.22,7.12-11.02,2.16.42,4.2,1.23,6.27,1.97-3.29-8.15-5.42-16.75-6.21-25.5-.06-1.96-.03-4.11,1.07-5.82,2.26-1.07,4.77-1.37,7.18-1.95-4.29-9.85-1.95-21.22-6.63-30.97-5.66.62-11.83-1.8-17,1.38-8.32,3.49-16.78,6.94-25.69,8.57-7.18,1.11-14.96-2.98-21.59,1.15-6.34,3.67-13.42,5.67-20.46,7.5-3.86.96-7.98,1.41-11.39,3.6-4.53,2.89-8.9,6.01-13.32,9.05,3.75,1.68,7.72,3.14,10.89,5.83.09.48.26,1.45.35,1.93-3.96,2.24-8.83,3.71-13.35,2.65-1.71-1.8-2.68-4.12-3.9-6.23-5.09,3.87-10.29,7.78-16.32,10.06-5.91,2.2-11.82,4.4-17.93,5.97-8.14,2.11-15.9,5.4-23.61,8.7-5.49,2.41-11.47,3.41-16.98,5.77,2.13.89,4.22,1.92,6.49,2.44,4.52-1.9,8.36-5.82,13.59-5.71.93,1.58,1.24,4.14,3.53,4.27,7.18-.1,13.89-3.43,19.48-7.74,3.57-2.26,6.66-5.39,10.62-6.94,3.25,1.09,6.16,2.97,9.31,4.31,2.83-1.92,5.48-4.09,8.31-5.99,1.2-.88,3.5-1.73,4.24.15.84,2.15.96,4.55.86,6.84-1.66,1.45-3.78,2.19-5.81,2.99-8.99,3.26-17.04,8.52-25.67,12.56-3.92,1.75-7.17,4.57-10.46,7.26-5.31.43-9.42,4.17-14.27,5.97-5.77,2.29-11.56,4.67-16.72,8.18-5.05,3.08-9.57,7.56-15.67,8.39-2.97.5-5.67,2.7-8.74,2.32-2.2-1.37-4.01-3.37-5.26-5.62,2.38-6.42,5.5-12.55,8.72-18.58-4.76,2.61-8.69,6.49-13.5,9.02.98-4.39,2.33-9.1,5.65-12.31,7.53-6.12,14.48-12.96,22.47-18.5,2.55-1.42,5.57-1.35,8.32-2.13,4.51-1.28,8.64-3.58,12.87-5.56,3.5-1.61,7.5-1.52,11.03-3.05,5.13-2.12,10.08-4.7,15.36-6.44,2.69-.91,5.49-1.7,7.82-3.39,8.21-5.92,16.59-11.62,25.43-16.57,3.57-2.09,6.8-4.82,10.69-6.35,6.82-2.85,14.63-2.96,20.94-7.07,5.79-3.1,10.89-8.79,18-8.22,11.53,1.3,23.76,2.89,34.69-2.11,3.46-1.78,6.24-4.71,9.95-6.03,4.24-1.73,8.96-1.08,13.23.16,6.18,1.91,12.83.68,18.99,2.66,3.96,1.28,8.03-.5,12.06-.1,4.37.49,8.75.72,13.15.68,4.25-.11,8.28,2.99,12.5,1.35,2.91-.92,5.92-1.48,8.89-2.16,3.38-.96,6.84-3.18,10.43-1.73,4.5,1.64,9.04,3.16,13.64,4.53,3.01-5.04,7.98-8.34,11.79-12.69,3.77-4.47,10.02-7.43,15.86-5.78,2.72-1.4,5.15-3.33,7.95-4.6,3.89-.72,7.88-.19,11.82-.18,4.33.36,7.68-3.2,11.9-3.67,5.18-.58,9.57-4.51,14.98-3.34,2.73-3.26,5.15-6.78,8.18-9.79,1.98.15,3.98.31,5.98.39,1.07-1.06,2.1-2.19,3.33-3.07,2.92-.16,5.85-.29,8.77-.44,2.87.56,5.66,1.55,8.62,1.57,2.05-1.57,4.27-2.89,6.38-4.37,3.02-2.17,4.91-5.56,7.92-7.73,2.66-1.16,5.29.97,7.89,1.42,3.49.27,6.9-.75,10.24-1.62.99,1.03,1.97,2.07,2.95,3.13,2.42-2.42,4.94-6.98,9-4.87,3.67-3.01,8.29-4.41,12.98-4.77,3.33-.15,6.12-2.06,9.03-3.46,4.5-2.21,10.28,1,14.32-2.53,4.54-3.72,9.57-7.26,15.49-8.22,4.28-.73,8.73,1.4,12.84-.44,5.19-2.25,11.14-1.4,16.2-4.05,5.98-2.92,12.59-3.85,18.93-5.66M610.32,18.58c5.3,3.01,9.66,7.37,14.86,10.55.01-.66.01-1.98.02-2.65-1.24-1.55-2.43-3.14-3.54-4.77-1.78-.29-3.56-.56-5.32-.81-.59-.65-1.18-1.3-1.75-1.94-1.43-.13-2.86-.26-4.27-.38M420.68,49.74c4.74.83,7.92,4.56,10.73,8.14-.71-4.35-2.35-8.45-3.93-12.53-2.18,1.6-4.44,3.08-6.8,4.39M388.23,59.91c2.98,1.16,5.93,2.41,8.98,3.4-1.31-2.88-2.79-5.66-4.41-8.37-1.52,1.65-3.04,3.32-4.57,4.97M333.06,74.64c1.7,3.5,4.07,6.61,5.93,10.02,1.81,3.28,2.02,7.1,3.16,10.61,2.05,3.52,6.69,4.93,8.4,8.72,1.33,5.8,1.14,12.78,5.93,17.08,3.06,2.66,5.12,6.18,7.76,9.21-.94-2.93-2.13-5.77-2.96-8.73-1.1-3.78.9-7.67-.08-11.45-1.28-4.95-2.34-9.95-3.52-14.92-.82-3.22,1.32-5.99,3.16-8.35-1.57-5.88-1.06-12.11-2.94-17.9-8.9-1.03-16.23,4.95-24.84,5.71M314.21,88.73c-2.5,2.59-2.62,6.4-4.26,9.46-3.79-.31-7.72-.01-11.39-1.15-2.56-1.67-2.86-5.12-4.41-7.57-5.33-.84-10.99-.83-16.15.97,3.82,3.86,5.99,9.78,11.48,11.65,7.03,2.64,14.37,4.52,21.07,7.97,6.35,3.4,12.24,7.59,17.93,11.99,3.55,2.93,8.38,3.38,12.1,6.06,4.59,3.21,9.94,4.97,15.02,7.25-2.57-5.79-5.37-11.47-8.02-17.21-3.3-4.06-4.13-9.54-7.77-13.36-3.17-3.59-5.29-7.93-8.11-11.79-3.62-4.5-2.19-10.78-5.18-15.59-4.29,3.56-8.66,7.08-12.31,11.32M241.05,90.99c1.33,2.59,1.31,5.43.13,8.08,2.7,13.3,8.05,25.86,14.55,37.71,2.01,3.81,7.3,3.93,9.4,7.68,3.34,5.8,5.3,12.26,7.12,18.67,2.32,7.45,5.17,14.97,4.94,22.9-.52,4.67,3.18,8.12,5.14,11.98,2.85-2.53,5.05-6.71,9.22-7.04-1.31,4.96-4.92,9.08-5.38,14.3,7.89-7.64,15.09-15.98,21.64-24.79-3.27.47-6.54.97-9.83,1.31,1.19-5.8,6.45-9.2,9.72-13.75-.94-1.49-1.81-3.04-2.95-4.39-1.73-.66-3.66-.43-5.47-.62-.33-.82-.65-1.63-.97-2.44-6.17-2.45-4.51-10.06-3.09-15.05,2.03-3.97,4.65-7.72,7.84-10.85,1.58-1.74,4.26-1.8,6.09-.41.66,2.45.64,5.03,1.26,7.5,1.08,1.64,2.63,2.91,3.96,4.36.42-.61,1.26-1.83,1.68-2.44-1.48-6.52-3.25-13.28-7.66-18.5-2.02-2.42-4.13-6.1-7.83-5.45-5.04-.07-10.54,1.85-15.29-.43-6.04-5.62-11.08-12.25-16.41-18.54-.8-1.32-2.91-2.97-1.45-4.56.71,0,2.11-.01,2.82-.01-1.35-1.14-2.66-2.31-3.97-3.48-8.41-.35-16.94.11-25.21-1.74M846.01,100.64c3.3.97,6.74,1.59,9.86,3.11,2.61,1.4,1.97,4.81,2.4,7.25-.01,4.05,2.74,7.22,5.36,9.98-1.06-2.9-2.84-5.66-2.95-8.81.89-1.59,2.1-2.96,3.22-4.38-6-4.76-11.22-10.81-18.27-14.03-3.1,1.17.21,4.68.38,6.88M989.93,127.19c.03,2.8-1.11,6.1.86,8.51,3.52,3.31,7.7,6.06,12.43,7.28-3.65-5.87-8.74-10.64-13.29-15.79M602.16,138.2c.01,2.74-.7,5.85.99,8.26,2,2.4,5.22,3.44,7,6.07,2.19,3.05,4.71,5.84,7.44,8.42,2.45-3,5.64-5.24,9.18-6.79-2.87-3.53-6.36-6.46-9.5-9.71-2.5-3.93-5.04-7.91-8.85-10.72-2.19,1.33-4.27,2.84-6.26,4.47M569.2,152.62c-1.73,3.38-.7,7.55-1.29,11.24,6.34-2.43,12.87-4.3,19.39-6.2-.23-4.78,3.74-7.69,5.52-11.69-3.09-.37-6.14-1.22-8.37-3.52-4.55,4.17-10.41,6.44-15.25,10.17M451.46,178.12c-.85,2.74-.52,5.67-.46,8.5,2.58-2.14,4.22-5.12,6.63-7.41,1.4-1.36,2.76-2.76,3.75-4.45-3.39.82-6.86,1.64-9.92,3.36M913.03,195.48c.48,2.05.05,4.7,1.97,6.12,5.8,4.54,10.32,10.45,14.47,16.49,1.63,2.01,4.03,3.2,6.17,4.61-.05-.76-.15-2.29-.2-3.06-4.53-4.34-7.58-9.97-12.14-14.3-3.26-3.47-7.14-6.27-10.27-9.86Z"
      />
    </motion.svg>
  );
};

export default PikesPeak;
