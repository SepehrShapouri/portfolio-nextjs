import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Previous Clients <span className="text-purple">Feedback</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 my-5">{companies.map((company) => {
        return (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={company.img} alt={company.name} className="md:w-10 w-5"/>
                <img src={company.nameImg} alt={company.name} className="md:w-24 w-20"/>
            </div>
        )
      })}</div>
    </div>
  );
}

export default Clients;
