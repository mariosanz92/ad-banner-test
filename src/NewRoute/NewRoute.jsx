import { Link } from "react-router-dom";
import { AdBanner } from "../AdBanner/AdBanner";
import { useEffect, useId } from "react";

export const NewRoute = () => {
  const id = useId();

  return (
    <div>
      <h1>NewRoute</h1>
      <Link to="/">New Route</Link>
      <AdBanner
        adUnitId="/6355419/Travel/Europe/France/Paris"
        size={{ width: 100, height: 100 }}
        adDivId={id}
      />
    </div>
  );
};
