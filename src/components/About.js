const About = () => {
  return (
    <section className="w-screen container mx-auto">
      <div className="h-96 mt-36 bg-sky-900 mx-auto rounded-md grid grid-cols-2 grid-rows-2 mb-4">
        <div
          className="col-span-1 row-span-2 flex flex-col
        justify-center items-start p-5"
        >
          <h2 className="text-3xl  mb-5 font-light">Can I borrow a pencil?</h2>
          <p className="font-thin text-lg">
            A student asking to borrow any form of school supplies may seem like
            a simple request, but for many, it may be an underliying problem
            that faces families around the country. The rising costs of school
            supplies is something many families don't have in their budget.
          </p>
        </div>

        <div className="col-span-1 row-span-2 flex items-center justify-center">
          <div className="border-solid border-2 border-sky-500 w-3/4 h-1/2 relative">
            <div className="border-solid border-2 border-sky-500 h-full w-full bg-sky-900 absolute right-5 top-5">
              <div className="w-full h-full text-center py-5 px-2">
                <h3 className="mb-5">
                  Cost of School Supplies<br></br>
                  <i>On Average</i>
                </h3>
                <div className="flex items-center justify-around">
                  <div className="w-1/5 mx-1">
                    <p className="font-thin text-left">Elementary</p>
                    <div className="bg-red-500">$1,017.37</div>
                  </div>
                  <div className="w-2/5 mx-1">
                    <p className="font-thin text-left">Middle School</p>
                    <div className="bg-blue-500">$1,277.35</div>
                  </div>
                  <div className="w-3/5 mx-1">
                    <p className="font-thin text-left">High School</p>
                    <div className="bg-green-500">$1,667.90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <div className="bg-sky-900 w-1/2 h-72 rounded-md mr-2">
          <h3>Stuff about how mny kids can't afford supplies</h3>
        </div>

        <div className="bg-sky-900 w-1/2 h-72 rounded-md ml-2">
          <h3>Stuff about teachers having to buy stuff</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
