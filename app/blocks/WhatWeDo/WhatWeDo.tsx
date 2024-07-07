import fonts from "@/app/fonts";
import style from "./component.module.css";

const WhatWeDo = () => {
  return (
    <section className={style.whatWeDo}>
      <div className={style.content}>
        <h1 className={`${fonts.logoFont.className} ${style.lead}`}>
          WHAT WE DO
        </h1>
        <p>
          We help businesses establish and maintain their online presence. We
          help businesses find their brand's unique voice. blah blah blah.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
