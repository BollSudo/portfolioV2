import React from "react";
import Cosmos from "../components/Cosmos.jsx";
import {ArrowDownTag} from "iconoir-react";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-26 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-family-generalsans">Julien RENAUD</p>
                <p className="hero_tag text-gray_gradient text-center">Développeur Junior Fullstack</p>
            </div>
            
            <div className="w-full h-full absolute inset-0">
                <Cosmos />
            </div>

            <div className="w-full mx-auto flex flex-col justify-center items-center gap-3 absolute bottom-1">
                <p className="hero_tag text-gray_gradient text-center">生き甲斐 Ikigai - 改善 Kaizen - 腹八分目 Hara Hachi Bu - 初心 Shoshin - 桜梅桃李 Oubaitori - 侘寂 Wabi-Sabi</p>
                <button className="">
                    <a href="/#about" className="">
                        <ArrowDownTag width="3em" height="3em"/>
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Hero;
