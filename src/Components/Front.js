import React, { Component } from "react";

class Front extends Component {
  render() {
    return (
      <div className="box-border m-0">
        <div className=" flex justify-center items-center  flex-col">
          <p className="text-[42px]  m-4 font-bold font-Poppins drop-shadow-md  animate-wiggle animation-delay-300 md:text-[72px]">
            Welcome ToDo list
          </p>
          <p className="text-[18px] text-center m-3 font-Poppins font-bold  animate-wiggle animation-delay-200 md:text-[24px]">
            {" "}
            If you're lucky enough to do well, it's your responsibilty to send
            the elevetor back down.
          </p>
          <a href="#" target="_blank" rel="noreferrer">
            <button
              className="font-Poppins text-lg bg-blue-400 px-[8px] py-[6px] mt-8 rounded-md shadow-md font-semibold  hover:scale-110 animate-wiggle animation-delay-100 hover:bg-blue-500 duration-500 "
              onclick="window.location.href='https://w3docs.com'"
            >
              Let's Start
            </button>
          </a>
        </div>
      </div>
    );
  }
}
export default Front;
