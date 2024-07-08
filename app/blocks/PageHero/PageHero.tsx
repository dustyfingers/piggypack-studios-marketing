interface IPageHero {
  headline: string;
  subhead?: string;
}

const PageHero = ({ headline, subhead }: IPageHero) => {
  return (
    <section>
      <h1>{headline}</h1>
      {subhead && <p>{subhead}</p>}
    </section>
  );
};

export default PageHero;
