import SideBar from "./SideBar";
import PopularCommunity from "./PopularCommunities";
import Main from "./Main";

import styles from "./Container.module.scss";

const Container = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Main />
      <PopularCommunity />
    </div>
  );
};

export default Container;
