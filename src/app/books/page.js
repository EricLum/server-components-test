import { Suspense } from "react";
import NameComponent from "./name"
import Location from "./location"

const StarWarsIndex =  () => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <NameComponent />
      </Suspense>
      <Suspense fallback={<div>loading location</div>}>
        <Location />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <NameComponent />
      </Suspense>
    </div>
  );
};



export default StarWarsIndex;
