import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="128" y="415" rx="30" ry="30" width="152" height="45" />
    <rect x="0" y="260" rx="10" ry="10" width="280" height="27" />
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="307" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="426" rx="10" ry="10" width="90" height="27" />
  </ContentLoader>
);

export default PizzaSkeleton;
