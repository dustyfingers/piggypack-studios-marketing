import Image from "next/image";
import style from "./component.module.css";

const WhatWeDo = () => {
  return (
    <section className={style.whatWeDo}>
      <div className={style.content}>
        <h1 className={style.lead}>WHAT WE DO</h1>
        <p>
          We help businesses establish and maintain their online presence. We
          help businesses find their brand's unique voice. blah blah blah.
        </p>
      </div>

      <div className={style.gallery}>
        <Image
          src="/images/stock-image.jpg"
          width={250}
          height={250}
          alt="stock image of a guy working"
        />
        <Image
          src="/images/stock-image.jpg"
          width={250}
          height={250}
          alt="stock image of a guy working"
        />
        <Image
          src="/images/stock-image.jpg"
          width={250}
          height={250}
          alt="stock image of a guy working"
        />
        <Image
          src="/images/stock-image.jpg"
          width={250}
          height={250}
          alt="stock image of a guy working"
        />
        <Image
          src="/images/stock-image.jpg"
          width={250}
          height={250}
          alt="stock image of a guy working"
        />
        <Image
          src="/images/stock-image.jpg"
          width={250}
          height={250}
          alt="stock image of a guy working"
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
