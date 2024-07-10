import style from "./component.module.css";

interface IContentContainer {
  children: React.ReactNode;
}
const ContentContainer = ({ children }: IContentContainer) => {
  return <div className={style.contentContainer}>{children}</div>;
};

export default ContentContainer;
