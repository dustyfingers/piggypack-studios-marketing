import ContentContainer from "@/app/components/ContentContainer";
import style from "./component.module.css";

const OurImpact = () => {
  return (
    <section className={style.impactSection}>
      <ContentContainer>
        <h3>Our Impact</h3>
        <div className={style.impactGrid}>
          <div className={style.impactItem}>Increased Leads</div>
          <div className={style.impactItem}>Increased Sales and Bookings</div>
          <div className={style.impactItem}>Increased Brand Visibility</div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default OurImpact;
