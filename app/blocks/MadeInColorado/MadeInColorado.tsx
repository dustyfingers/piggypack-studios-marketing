import PikesPeak from "@/app/components/svg/PikesPeak/PikesPeak";
import style from "./component.module.css";

const MadeInColorado = () => {
  return (
    <section className={style.madeInColorado}>
      <PikesPeak />
      <h2>Made In Colorado</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
        cupiditate quis blanditiis optio a dicta, cum excepturi consequuntur
        vitae accusantium magnam. Cumque ex molestias odio iusto. Excepturi enim
        doloremque omnis?
      </p>
    </section>
  );
};

export default MadeInColorado;
