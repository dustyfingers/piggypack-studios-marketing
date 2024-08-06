"use client";

import { useEffect } from "react";
import style from "./component.module.css";

import { AnimationSequence, useAnimate } from "framer-motion";

const LandingTypeLogo = () => {
  const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   // test sequence works....but selecting the paths in any way i have tried does not work
  //   // the paths get their pathlength updated....but it is immediate and doesnt appear to animate
  //   const sequence: AnimationSequence = [
  //     [
  //       "path",
  //       {
  //         pathLength: 1,
  //       },
  //       {
  //         duration: 5,
  //       },
  //     ],
  //   ];
  //   console.log(sequence);
  //   animate(sequence);
  // }, []);

  return (
    <svg
      className={style.landingLogo}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80.13 43.45"
      ref={scope}
    >
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M1.73.31c-.26.51-.27.96-.15,1.51.18.83.39,1.6.46,2.45.14,1.57.1,3.16.12,4.74.04,3.35.07,6.7.11,10.05,0,.8,1.26.81,1.25,0-.03-3.11-.07-6.21-.1-9.32-.02-1.48,0-2.97-.06-4.45-.03-.62-.07-1.25-.16-1.87-.05-.34-.1-.67-.17-1.01-.08-.38-.41-1.09-.22-1.47.37-.71-.71-1.35-1.08-.63h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M3.66,6.02c.27-.86.8-1.63,1.29-2.38.44-.67.96-1.33,1.7-1.68,1.71-.8,2.85.72,3.28,2.2s.29,3.09-.3,4.51c-.31.73-.74,1.45-1.27,2.03-.61.66-1.36.68-2.22.63-1.86-.13-3.68-.87-5.06-2.12-.6-.54-1.48.34-.88.88,1.56,1.4,3.51,2.23,5.59,2.45,1.02.11,2.12.12,2.98-.52.78-.6,1.38-1.52,1.81-2.4.87-1.79,1.14-3.86.58-5.79S9.23.18,7.09.53c-1.18.19-2.11.97-2.81,1.9-.74.98-1.46,2.08-1.83,3.26-.24.77.96,1.1,1.21.33h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M10.96,10.45c-.18.9-.27,1.82-.22,2.74s.17,1.82.47,2.66c.15.42.44.77.9.87s.92-.07,1.3-.32c.68-.45,1.29-1.03,1.83-1.63.6-.68,1.12-1.43,1.53-2.25.15-.3.08-.68-.22-.86-.28-.16-.7-.08-.86.22-.37.75-.83,1.44-1.39,2.06-.28.31-.58.61-.9.89-.26.22-.56.53-.89.64-.02,0-.14.05-.14.03.03,0,.06,0,.08.05.01.04,0,.02-.03-.05,0-.1-.11-.37-.15-.52-.11-.44-.2-.89-.24-1.34-.09-.96-.05-1.92.14-2.87.07-.33-.1-.68-.44-.77-.31-.08-.7.1-.77.44h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M21.98,8.46c-.63-.41-1.41-.58-2.16-.49-.8.09-1.46.47-2.07.98-1.12.95-1.99,2.37-1.88,3.89.06.75.31,1.81,1.09,2.11.71.28,1.6.14,2.29-.14.75-.3,1.39-.79,1.92-1.38.26-.29.5-.61.74-.92s.54-.66.62-1.05c.11-.5-.14-.98-.56-1.24s-.92-.27-1.41-.21c-.23.03-.46.07-.63.24-.24.24-.24.61-.06.87.37.53,1.29.24,1.23-.43-.03-.34-.27-.62-.62-.62-.32,0-.65.29-.62.62v.05c.07-.15.13-.29.19-.44l-.04.04.44-.18h-.05c.15.06.29.13.44.19l-.03-.04.16.61v-.05c-.09.12-.18.25-.28.37.07-.04.42-.03.53,0,.02,0,.13.05.12.06,0,0-.02-.1-.03-.1.02-.06.02-.05,0,0-.02.04-.05.09-.08.13-.26.4-.56.79-.87,1.15-.61.7-1.42,1.33-2.38,1.37-.21,0-.39-.02-.59-.06.12.02.08.1.03-.02-.02-.06-.06-.11-.09-.17-.05-.11-.09-.22-.12-.33-.12-.42-.12-.86-.02-1.28.22-.91.84-1.68,1.56-2.24.77-.6,1.76-.75,2.6-.2.68.44,1.31-.64.63-1.08h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M21.98,11.85c.77,1.31,1.23,2.78,1.29,4.29.01.34.28.62.62.62.33,0,.64-.29.62-.62-.07-1.74-.58-3.42-1.46-4.92-.41-.69-1.49-.06-1.08.63h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M23.16,16.81c.45.61.23,1.31-.05,1.95-.3.68-.67,1.34-1.04,1.98-.75,1.27-1.77,2.5-3.2,3.01-.33.12-.6.27-.8-.07-.18-.29-.21-.65-.16-.98.11-.75.65-1.39,1.14-1.94,1.06-1.18,2.23-2.27,3.48-3.25.71-.56,1.45-1.06,2.19-1.57.67-.47,1.31-.99,1.71-1.71s-.69-1.33-1.08-.63c-.44.79-1.25,1.25-1.98,1.75-.82.57-1.62,1.17-2.38,1.82s-1.5,1.32-2.19,2.04c-.65.67-1.34,1.38-1.76,2.23-.38.78-.53,1.69-.21,2.52.34.88,1.04,1.35,1.98,1.13,1.78-.42,3.17-1.82,4.12-3.31.55-.87,1.06-1.8,1.45-2.75s.51-1.98-.11-2.83c-.47-.64-1.56-.02-1.08.63h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M31.58,8.49c-1.22-.5-2.66-.39-3.83.2s-2.02,1.88-2.26,3.21c-.13.73-.12,1.53.31,2.16.4.59,1.08,1,1.8.97s1.41-.38,1.99-.72,1.15-.77,1.61-1.27c.58-.63,1.02-1.48.61-2.32-.35-.72-1.38-1.05-2.05-.56-.27.2-.41.54-.22.86.16.27.58.42.86.22.03-.02.07-.05.11-.07-.03.01-.09.01-.02.02.01,0,.15.01.09,0s.1.05.03.01c.06.04.06.02.09.08.02.06.04.11.03.21-.04.36-.47.74-.74.99-.36.33-.75.6-1.18.83-.37.2-.89.5-1.33.46-.3-.03-.6-.27-.72-.57-.19-.44-.09-.96.03-1.4.24-.88.78-1.64,1.59-2.05.89-.45,1.95-.45,2.87-.08.31.13.69-.14.77-.44.1-.36-.12-.64-.44-.77h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M31.52,11.83c1.55,1.76,2.17,4.18,1.63,6.46-.5,2.14-2.01,4.49-3.96,5.59-.48.27-1.16.49-1.67.16-.59-.39-.15-1.27.09-1.78.5-1.06,1.2-2,2.07-2.79,1.66-1.52,3.83-2.34,5.23-4.17s1.9-4.17,1.36-6.41c-.14-.58-1.08-.61-1.21,0-.24,1.12-.23,2.27.1,3.38.23.78.72,2.24,1.66,2.42s1.99-.83,2.61-1.35c.87-.73,1.59-1.63,2.14-2.62.39-.7-.69-1.33-1.08-.63-.74,1.33-1.81,2.43-3.13,3.19-.37.21-.37.07-.56-.29s-.36-.76-.47-1.17c-.23-.85-.25-1.72-.06-2.59h-1.21c.66,2.73-.62,5.32-2.84,6.91-1.11.79-2.31,1.45-3.33,2.36s-1.8,1.95-2.36,3.13c-.47,1-.96,2.32-.02,3.22.83.79,2.12.7,3.08.23,2.24-1.11,4.01-3.76,4.67-6.11.8-2.83.07-5.84-1.86-8.04-.53-.61-1.41.28-.88.88h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M40.18,8.13l-.31,5.84c-.05.92-.09,1.84-.15,2.76-.05.86-.06,1.83-.37,2.64-.08.22-.43.74-.7.4-.23-.29.25-.76.43-.94.55-.55,1.22-.97,1.89-1.35,1.34-.77,2.73-1.42,3.89-2.47.6-.54-.29-1.42-.88-.88-1.5,1.36-3.49,2-5.08,3.22-.71.55-1.56,1.3-1.54,2.28.02.89.8,1.59,1.68,1.47.96-.13,1.45-.97,1.64-1.85.24-1.13.28-2.3.34-3.46l.4-7.67c.04-.8-1.21-.8-1.25,0h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M46.12,13.14c0-.48.37-.88.62-1.26.3-.44.6-.89.9-1.33.58-.85,1.19-1.69,1.73-2.57.78-1.27,1.21-2.89.05-4.09-.98-1.02-2.55-.97-3.45.13-1.01,1.24-1.12,3.19-1.28,4.7-.23,2.04-.21,4.1.05,6.13.11.91.27,1.81.47,2.7.17.71.38,1.48,1.04,1.89,1.29.8,2.88-.22,3.28-1.51.26-.82.18-1.73.17-2.58,0-.8.13-1.79-.37-2.47-.43-.58-1.26-.78-1.87-.34-.54.39-.69,1.17-.54,1.79.52,2.19,2.82.52,3.96-.07.71-.37.08-1.45-.63-1.08-.47.24-.94.49-1.42.73-.12.06-.51.35-.66.26-.1-.06-.16-.81.22-.44.22.22.06,1.32.06,1.61,0,.57.05,1.16-.02,1.73s-.25,1.06-.78,1.29c-.61.27-.95-.1-1.12-.66-.36-1.19-.53-2.47-.64-3.7-.23-2.46-.11-4.95.38-7.37.15-.74.35-1.95,1.2-2.2.52-.15,1.02.19,1.26.64.28.52.15,1.12-.09,1.63-.52,1.15-1.39,2.19-2.09,3.23-.63.93-1.71,2.03-1.7,3.23,0,.8,1.26.81,1.25,0h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M58.86,7.76c-1.43-.51-2.91.3-4.16.95-1.12.58-2.29,1.33-2.91,2.47s-.72,2.91.35,3.83c1.13.98,2.72.42,3.73-.42,1.32-1.1,2.41-2.57,3.27-4.05l-1.14-.48c-.32,1.25-.45,2.56-.36,3.85.05.67.15,1.35.3,2,.13.55.26,1.18.68,1.58.85.81,2.04.07,2.59-.7.74-1.04,1.14-2.31,1.54-3.51.25-.77-.95-1.09-1.21-.33-.28.86-.57,1.73-1,2.53-.19.36-.4.77-.75,1-.41.26-.44-.09-.54-.45-.52-1.85-.52-3.78-.06-5.64.17-.68-.78-1.11-1.14-.48-.74,1.28-1.64,2.46-2.72,3.48-.48.46-1.08.94-1.79.9-.64-.04-.92-.52-.95-1.12-.09-1.41.94-2.33,2.06-2.99.56-.33,1.15-.63,1.74-.9.68-.31,1.4-.56,2.13-.3s1.09-.94.33-1.21h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M67.03,11.28c.71-.69,1.15-1.58,1.25-2.57.1-1.04-.22-2.12-1.39-2.26-2.08-.25-3.44,2.12-4.26,3.67s-1.91,3.89-.81,5.61c1.02,1.6,3.25,1.71,4.82.93,2.22-1.1,2.92-3.57,4.09-5.56.41-.7-.67-1.33-1.08-.63-.81,1.38-1.3,2.99-2.41,4.17-.89.95-2.29,1.61-3.58,1.06-1.4-.59-1.09-2.25-.66-3.39.3-.79.69-1.56,1.13-2.29.39-.64.8-1.31,1.36-1.82.26-.24.59-.46.94-.51.13-.02.41-.05.52.05.08.08.08.37.09.49.06.83-.3,1.59-.89,2.16s.3,1.44.88.88h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M71.81,10.61c1.15-1.73,1.86-3.94,1.61-6.03-.1-.87-.7-1.51-1.62-1.39s-1.42.93-1.75,1.72c-.83,1.98-.63,4.14-.8,6.23s-1.19,4.39-.37,6.55c.28.75,1.49.42,1.21-.33-.61-1.62-.02-3.26.25-4.88s.19-3.16.33-4.74c.07-.8.22-1.6.53-2.34.11-.27.33-.89.67-.94.43-.07.34.6.34.89,0,1.67-.55,3.25-1.47,4.63-.45.67.64,1.3,1.08.63h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M70.36,11.89c.63-.73,1.63-1.09,2.59-.96.06,0,.63.19.63.18-.01-.25-.07-.32-.17-.2-.06.05-.12.11-.19.16-.13.11-.26.21-.39.31-.49.37-1.01.68-1.55.97-.45.24-.36.82,0,1.08.57.41.9,1.08,1.27,1.65.42.67.85,1.34,1.27,2.02.64,1.01,1.46,2.12,2.82,1.79,1.28-.31,1.96-1.73,2.41-2.84.55-1.36.81-2.8,1.06-4.24.14-.79-1.07-1.12-1.21-.33-.21,1.21-.43,2.44-.83,3.61-.2.59-.45,1.16-.78,1.7-.23.38-.62.9-1.12.92-.46.01-.77-.41-.99-.76-.36-.54-.69-1.09-1.03-1.64-.66-1.04-1.24-2.22-2.25-2.96v1.08c.83-.44,1.61-.97,2.32-1.58.32-.28.61-.64.52-1.09s-.46-.72-.88-.88c-1.49-.55-3.37-.07-4.4,1.13-.52.61.36,1.49.88.88h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M26.7,25.57c-1.3-.28-2.58-.14-3.86.15-1.11.25-2.34.48-3.31,1.1-.81.52-1.46,1.41-1.38,2.42.09,1.2,1.18,1.62,1.99,2.29.92.76,1.73,1.85,2.38,2.84s1.19,2.12.95,3.29c-.29,1.38-1.86,1.07-2.81.58-1.21-.63-1.36-1.84-.62-2.94s1.92-1.98,3.1-2.52c.58-.26,1.19-.41,1.81-.51.59-.09,1.12-.21,1.56-.64.58-.56-.31-1.45-.88-.88-.38.37-1.12.31-1.6.42-.62.14-1.23.37-1.8.67-1.07.55-2.09,1.35-2.85,2.28s-1.31,2.15-.95,3.38c.32,1.12,1.34,1.78,2.38,2.15s2.37.44,3.21-.39.88-2.21.62-3.29c-.29-1.21-1.01-2.28-1.77-3.25-.84-1.07-1.68-1.98-2.79-2.75-.59-.42-.9-.91-.43-1.57.4-.58,1.15-.84,1.79-1.03,1.56-.46,3.31-.94,4.94-.59.78.17,1.12-1.03.33-1.21h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M26.6,27c-.83,3.11-.55,6.33-.17,9.49.12,1.03.31,2.7,1.72,2.67.64-.01,1.2-.66,1.63-1.07.53-.51,1-1.07,1.45-1.65.48-.64-.6-1.27-1.08-.63-.34.45-.71.87-1.11,1.26-.19.18-.38.36-.58.53s-.29.39-.47.21c-.29-.28-.27-.96-.31-1.32-.07-.61-.14-1.22-.2-1.83-.24-2.45-.31-4.93.33-7.32.21-.78-1-1.11-1.21-.33h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M31.46,31.41c-.08,1.05-.09,2.1-.05,3.15.04.95.06,2.03.69,2.81.3.37.75.52,1.21.4s.78-.5.99-.91c.46-.91.9-1.82,1.34-2.73.24-.49.47-.99.55-1.53.09-.58.04-1.16-.14-1.72l-1.21.33c.56,1.72.55,3.59.67,5.38.04.56.65.8,1.07.44.66-.57,1.22-1.26,1.62-2.04.37-.71-.71-1.35-1.08-.63s-.83,1.28-1.42,1.78l1.07.44c-.13-1.9-.13-3.89-.72-5.71-.25-.76-1.45-.44-1.21.33.15.45.19.91.08,1.38s-.34.86-.54,1.28c-.22.46-.45.91-.67,1.37-.12.25-.24.49-.36.74-.05.1-.09.2-.14.29-.03.06-.14.2-.15.25,0,0-.03.04-.04.05.05-.07.11.19.01-.01-.09-.18-.17-.32-.22-.52-.11-.44-.12-.9-.14-1.34-.05-1.09-.04-2.18.04-3.27.02-.34-.3-.62-.62-.62-.36,0-.6.29-.62.62h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M43.44,31.75c-.83-1.04-2.42-.9-3.49-.35-1.28.66-2.12,2.05-2.24,3.47s.66,2.87,2.29,2.73,2.69-1.31,3.55-2.52c.97-1.37,1.85-2.89,2.37-4.5.32-.98,1.09-3.97-.76-3.95-1.61.02-2.1,2.14-2.33,3.36-.36,1.9-.35,3.72-.27,5.64.02.57.04,1.13.07,1.7.02.45-.01.94.11,1.38.22.79,1.07,1.1,1.82.9.83-.22,1.24-1,1.55-1.73.39-.94.61-1.92.71-2.93.08-.8-1.17-.79-1.25,0-.06.59-.18,1.17-.35,1.73-.15.5-.32,1.12-.68,1.52-.09.1-.4.34-.57.21-.12-.09-.06-.6-.07-.73-.03-.68-.05-1.36-.08-2.04-.05-1.29-.15-2.59,0-3.88.12-1.04.24-2.39.79-3.31.12-.2.26-.39.45-.51.28-.18.06.02.04-.06.03.09,0,.24,0,.34,0,.6-.12,1.19-.28,1.76-.34,1.17-.92,2.26-1.56,3.29-.55.89-1.12,1.83-1.96,2.49-.65.51-2.05,1.11-2.29-.09-.21-1.05.27-2.14,1.07-2.82.63-.54,1.88-.98,2.5-.21.5.63,1.38-.26.88-.88h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M47.15,34.1h.04c.26-.05.46-.36.46-.61v-.06c0-.22-.12-.43-.31-.54l-.05-.03c-.25-.14-.55-.1-.76.1-.44.41-.25,1.21-.23,1.75.02.61-.03,1.29.15,1.88.32,1.07,1.52,1.54,2.43.86s1.46-1.59,2.04-2.51,1.24-1.79,2.31-2.09l-.33-1.21c-1.4.49-2.29,1.74-2.49,3.19-.1.72-.1,1.57.45,2.12s1.37.64,2.06.44c1.36-.41,2.78-2.36,2.28-3.8-.6-1.73-3.13-.52-2.99,1.02.08.9.91,1.46,1.78,1.39,1-.08,1.67-.86,2.61-1.05.79-.16.45-1.36-.33-1.21-.61.12-1.09.46-1.62.76-.24.13-1.16.54-1.19-.02-.01-.21.24-.38.4-.46.18-.08.19-.07.19.13,0,.56-.38,1.14-.75,1.54-.32.35-.79.65-1.29.52s-.43-.75-.38-1.17c.13-.94.67-1.87,1.6-2.19.75-.26.45-1.43-.33-1.21-1.78.51-2.63,2.06-3.58,3.49-.21.31-1.14,1.76-1.56,1.29-.27-.3-.17-.97-.18-1.34-.02-.53-.11-1.1-.04-1.62l-.18.44.07-.07-.76.1.05.03-.31-.54v.06c.15-.2.31-.4.46-.6h-.04c-.79.13-.46,1.34.33,1.21h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M58.69,32.44l.06-.34c.1-.52-.42-1-.92-.71-.68.39-1.38.85-1.67,1.62s.04,1.44.58,2.02c1.15,1.22,1.63,2.76,1.98,4.36.14.66.38,1.41.25,2.09-.13.71-.81.85-1.41.59-.77-.34-1.03-1.19-1.21-1.94s-.43-1.55.26-2.09c.8-.64,1.73-1.15,2.58-1.71.96-.63,1.92-1.26,2.89-1.89.67-.44.04-1.52-.63-1.08-.96.63-1.92,1.26-2.89,1.89-.9.59-1.86,1.14-2.71,1.8-.76.59-1.04,1.39-.92,2.34.11.89.34,1.89.82,2.67.85,1.37,3.13,2.07,4.14.46.42-.67.38-1.52.26-2.27-.15-.93-.36-1.86-.64-2.76-.3-.97-.73-1.9-1.35-2.71-.22-.29-.86-.75-.88-1.13-.04-.56.78-.95,1.17-1.18l-.92-.71-.06.34c-.15.79,1.06,1.12,1.21.33h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M47.32,31.05h-.1c-.09,0-.17.01-.24.05-.08.03-.14.07-.2.13-.06.06-.1.12-.13.2-.04.07-.06.15-.05.24l.02.17c.03.11.08.2.16.28l.13.1c.1.06.2.08.32.09h.1c.09,0,.17-.01.24-.05.08-.03.14-.07.2-.13.06-.06.1-.12.13-.2.04-.07.06-.15.05-.24l-.02-.17c-.03-.11-.08-.2-.16-.28l-.13-.1c-.1-.06-.2-.08-.32-.09h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M21.12,29.83c1.35-.13,2.7-.27,4.05-.4s2.65-.22,3.95.01c.79.14,1.12-1.06.33-1.21-1.37-.25-2.75-.2-4.13-.07s-2.8.27-4.2.41c-.34.03-.62.26-.62.62,0,.31.29.66.62.62h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M11.56,8.01l-.1.09c-.06.06-.1.12-.13.2-.04.07-.06.15-.05.24,0,.09.01.17.05.24.03.08.07.14.13.2l.13.1c.1.06.2.08.32.09l.17-.02c.11-.03.2-.08.28-.16l.1-.09c.06-.06.1-.12.13-.2.04-.07.06-.15.05-.24,0-.09-.01-.17-.05-.24-.03-.08-.07-.14-.13-.2l-.13-.1c-.1-.06-.2-.08-.32-.09l-.17.02c-.11.03-.2.08-.28.16h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M11.61,9.25c.8,0,.81-1.25,0-1.25s-.81,1.25,0,1.25h0Z"
      />
      <path
        pathLength={0}
        stroke="var(--cream)"
        d="M11.71,8.73c.8,0,.81-1.25,0-1.25s-.81,1.25,0,1.25h0Z"
      />
    </svg>
  );
};

export default LandingTypeLogo;
