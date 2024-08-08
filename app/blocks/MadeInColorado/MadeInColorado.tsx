import PikesPeak from "@/app/components/svg/PikesPeak/PikesPeak";
import style from "./component.module.css";
import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import ColoradoCountyMap from "@/app/components/svg/ColoradoCountyMap/ColoradoCountyMap";

const MadeInColorado = () => {
  return (
    <section className={style.madeInColorado}>
      <ContentContainer>
        <div className={style.contentWrapper}>
          <PikesPeak />
          {/* <ColoradoCountyMap /> */}
          <h2>Made In Colorado</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            cupiditate quis blanditiis optio a dicta, cum excepturi consequuntur
            vitae accusantium magnam. Cumque ex molestias odio iusto. Excepturi
            enim doloremque omnis?
          </p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default MadeInColorado;
