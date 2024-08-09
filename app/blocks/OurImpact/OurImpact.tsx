"use client";

import ContentContainer from "@/app/components/ContentContainer";
import style from "./component.module.css";
import { motion, Variants } from "framer-motion";

const leadsIconVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const salesIconVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.4,
    },
  },
};

const brandVisibilityIconVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.8,
    },
  },
};

const LeadsIcon = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="var(--cream)"
        className={style.impactIcon}
        variants={leadsIconVariants}
      >
        <path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z" />
      </motion.svg>
    </motion.div>
  );
};

const SalesIcon = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="var(--cream)"
        className={style.impactIcon}
        variants={salesIconVariants}
      >
        <path d="M863-404 557-97q-9 8.5-20.25 12.75T514.25-80Q503-80 492-84.5T472-97L98-472q-8-8-13-18.96-5-10.95-5-23.04v-306q0-24.75 17.63-42.38Q115.25-880 140-880h307q12.07 0 23.39 4.87Q481.7-870.25 490-862l373 373q9.39 9 13.7 20.25 4.3 11.25 4.3 22.5t-4.5 22.75Q872-412 863-404ZM516-138l306-307-375-375H140v304l376 378ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Zm236 185Z" />
      </motion.svg>
    </motion.div>
  );
};

const BrandVisibilityIcon = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="var(--cream)"
        className={style.impactIcon}
        variants={brandVisibilityIconVariants}
      >
        <path d="M480.12-330q70.88 0 120.38-49.62t49.5-120.5q0-70.88-49.62-120.38T479.88-670Q409-670 359.5-620.38T310-499.88q0 70.88 49.62 120.38t120.5 49.5Zm-.36-58q-46.76 0-79.26-32.74-32.5-32.73-32.5-79.5 0-46.76 32.74-79.26 32.73-32.5 79.5-32.5 46.76 0 79.26 32.74 32.5 32.73 32.5 79.5 0 46.76-32.74 79.26-32.73 32.5-79.5 32.5Zm.24 188q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.17 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.33-174.5Q601.34-740 480.17-740T257.5-674.5Q156-609 102-500q54 109 155.33 174.5Q358.66-260 479.83-260Z" />
      </motion.svg>
    </motion.div>
  );
};

const OurImpact = () => {
  return (
    <section className={style.impactSection}>
      <ContentContainer>
        <h2 className={style.impactHeader}>Our Impact</h2>
        <div className={style.impactGrid}>
          <div className={style.impactGridItem}>
            <LeadsIcon />
            <h4>Increased Leads</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              soluta earum minima rem cupiditate nostrum, magni neque quasi
              saepe. Obcaecati, ut odio! Repellendus odit impedit facilis
              provident delectus quis ut!
            </p>
          </div>
          <div className={style.impactGridItem}>
            <SalesIcon />
            <h4>Increased Sales and Bookings</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              soluta earum minima rem cupiditate nostrum, magni neque quasi
              saepe. Obcaecati, ut odio! Repellendus odit impedit facilis
              provident delectus quis ut!
            </p>
          </div>
          <div className={style.impactGridItem}>
            <BrandVisibilityIcon />
            <h4>Increased Brand Visibility</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              soluta earum minima rem cupiditate nostrum, magni neque quasi
              saepe. Obcaecati, ut odio! Repellendus odit impedit facilis
              provident delectus quis ut!
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default OurImpact;
