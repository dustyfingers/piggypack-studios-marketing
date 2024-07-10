import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import style from "./component.module.css";
interface IPageHero {
  headline: string;
  subhead?: string;
}

const PageHero = ({ headline, subhead }: IPageHero) => {
  return (
    <section className={style.pageHero}>
      <ContentContainer>
        <h1>{headline}</h1>
        {subhead && <p>{subhead}</p>}
      </ContentContainer>
    </section>
  );
};

export default PageHero;
