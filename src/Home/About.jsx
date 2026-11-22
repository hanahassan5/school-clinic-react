import React from "react";

export default function About() {
  return (
    <section id="pricing" className="about-home my-15">

        <div className="w-[90%] m-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <img src={`${import.meta.env.BASE_URL}img/Group 182.png`} className="w-[75%] m-auto mb-10" alt="" />
                </div>
                <div>
                    <img src={`${import.meta.env.BASE_URL}img/Group 182.png`} className="w-[75%] m-auto mb-10" alt="" />
                </div>
                <div>
                    <img src={`${import.meta.env.BASE_URL}img/Group 182.png`} className="w-[75%] m-auto mb-10" alt="" />
                </div>
                <div>
                    <img src={`${import.meta.env.BASE_URL}img/Group 182.png`} className="w-[75%] m-auto mb-10" alt="" />
                </div>
            </div>
        </div>

    </section>
  );
}
