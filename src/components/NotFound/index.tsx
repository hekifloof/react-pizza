import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <h1 className={styles.root}>
      <span>:(</span>
      <br />
      Страница не найдена
    </h1>
  );
};

export default NotFound;
