import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="footer-home bg-[#0f7b65] text-white py-25 rounded-[170px_170px_0px_0px]">
        <div className="w-[90%] m-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-6">
                
                <div className=" md:col-span-3 text-center mb-10">
                    <h2 className="text-2xl font-semibold mb-3 mt-5">Madrasty</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aliquid pariatur quos quo corrupti ab assumenda!</p>
                </div>

                <div className="text-center md:text-left mb-10">
                    <h5 className="text-xl text-[#f38d7e]">Student</h5>
                    <a href="#" className="block mt-3">Result</a>
                    <a href="#" className="block mt-3">Exams</a>
                    <a href="#" className="block mt-3">Quizes</a>
                    <a href="#" className="block mt-3">Coursers</a>
                </div>

                <div className="text-center  md:text-left mb-10">
                    <h5 className="text-xl text-[#f38d7e]">News</h5>
                    <a href="#" className="block mt-3">Uniform</a>
                    <a href="#" className="block mt-3">Chapion</a>
                    <a href="#" className="block mt-3">Tables</a>
                </div>

                <div className="text-center md:text-left  mb-10">
                    <h5 className="text-xl text-[#f38d7e]">Contact</h5>
                    <a href="#" className="block mt-3">2034545</a>
                    <a href="#" className="block mt-3">Or32@Yahoo.com</a>
                </div>


            </div>
        </div>
    </footer>
  );
}
