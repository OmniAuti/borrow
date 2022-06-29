import DumpObject from "./DumpObject";

import { useEffect, useState } from "react";
import { fetchAllItems } from "../api/api";

const SupplyDump = () => {
  const [dumpData, setDumpData] = useState([]);

  useEffect(() => {
    fetchAllItems().then((res) => setDumpData(res.data));
  }, []);

  return (
    <section className=" w-full container overflow-hidden mx-auto">
      <h3 className="text-center text-3xl mt-4">Supplies In Your Area</h3>
      <div className="flex  items-center justify-between flex-wrap">
        {dumpData.length <= 0 ? (
          <div className="h-72 mt-10 mx-auto text-center">
            <h2 className="text-2xl my-5">
              Sorry, there appears to be no one offering supplies in your area.
            </h2>
            <p className="text-2xl font-thin">Try posting in our Ask Section to meet your needs.</p>
          </div>
        ) : (
          dumpData
            .slice(0, 3)
            .map((data) => <DumpObject key={data._id} data={data} />)
        )}
      </div>
    </section>
  );
};

export default SupplyDump;
