import Image from "next/image";
import style from "./component.module.css";

interface ITextImageSection {
  title: string;
  text: string;
  imageSrc: string;
  imageFirst?: boolean;
}

const TextImageSection = ({
  title,
  text,
  imageSrc,
  imageFirst,
}: ITextImageSection) => {
  return (
    <div
      className={`${style.textImageSection} ${
        imageFirst ? style.imageFirstContainer : style.contentFirstContainer
      }`}
    >
      <div className={style.contentContainer}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className={style.imageAndBorderContainer}>
        <div className={style.borderContainer}>
          <Image
            src={imageSrc}
            width={350}
            height={350}
            alt="stock image of a guy working"
            className={`${style.image} ${
              imageFirst ? style.imageFirst : style.contentFirst
            }`}
          />
        </div>
      </div>
    </div>
  );
};

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
        <TextImageSection
          title="Web Design and Development"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eget mi proin sed libero enim. Enim neque volutpat ac tincidunt vitae semper quis lectus. Purus in massa tempor nec feugiat nisl pretium fusce id. Nec dui nunc mattis enim ut tellus. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam etiam erat velit scelerisque in dictum non consectetur."
          imageSrc="/images/stock-image.jpg"
        />
        <TextImageSection
          title="Brand Identity Development"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eget mi proin sed libero enim. Enim neque volutpat ac tincidunt vitae semper quis lectus. Purus in massa tempor nec feugiat nisl pretium fusce id. Nec dui nunc mattis enim ut tellus. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam etiam erat velit scelerisque in dictum non consectetur."
          imageSrc="/images/stock-image.jpg"
          imageFirst={true}
        />
        <TextImageSection
          title="Web Hosting and Maintenance"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eget mi proin sed libero enim. Enim neque volutpat ac tincidunt vitae semper quis lectus. Purus in massa tempor nec feugiat nisl pretium fusce id. Nec dui nunc mattis enim ut tellus. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam etiam erat velit scelerisque in dictum non consectetur."
          imageSrc="/images/stock-image.jpg"
        />
        <TextImageSection
          title="Social Media Marketing and Management"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eget mi proin sed libero enim. Enim neque volutpat ac tincidunt vitae semper quis lectus. Purus in massa tempor nec feugiat nisl pretium fusce id. Nec dui nunc mattis enim ut tellus. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam etiam erat velit scelerisque in dictum non consectetur."
          imageSrc="/images/stock-image.jpg"
          imageFirst={true}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
