import React from "react";

export default function School() {
  return (
    <main className="school-home my-10">
        <div className="w-[90%] m-auto">
            <div className="grid md:grid-cols-2">

                <div className="md:col-span-2">
                    <h2 className="text-center text-3xl font-semibold mb-3 mt-10">School Clinic</h2>
                    <hr className="w-[150px] m-auto h-[3px] mb-10 bg-red-500 border-none" />
                </div>

                <div>
                    <img src={`${import.meta.env.BASE_URL}img/compo.png`} className="w-[70%] block m-auto mb-10" />
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-medium mb-2 text-[#0f7b65]">The School Clinic Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus aperiam fuga vitae deleniti, quis reprehenderit quaerat odio, corporis, doloremque neque. Nostrum recusandae provident aut debitis, nulla quo impedit quis.</p>
                </div>

            </div>
        </div>
    </main>
  );
}
