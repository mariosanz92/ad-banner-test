import { Link } from "react-router-dom";

import { AdBanner } from "../AdBanner/AdBanner";
import { useId } from "react";

export const Home = () => {
  const id = useId();

  return (
    <div>
      <h1>Home</h1>
      <Link to="/NewRoute">Home</Link>
      <AdBanner
        adUnitId="/6355419/Travel/Europe/France/Paris"
        size={{ width: 100, height: 100 }}
        adDivId={`banner-home-${id}`}
      />
    </div>
  );
};
