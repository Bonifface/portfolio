'use client';

import cn from "./Header.module.scss";
import avatar from "@img/clone.jpg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={cn.header}>
      <div className={cn.container}>
        <h1 className={cn.title}>
          Hi, i am <br /> Taras Bilyk.
        </h1>
        <p className={cn.subtitle}>
          A Stryi based front-end developer passionate about building accessible
          and user friendly websites.
        </p>
        <a href="#contact" className={cn.contract}>Contact me</a>
        <a href="https://github.com/Bonifface">
          {/*<Image src={github} alt="#" className={cn.github}/>*/}
          <span className={cn.github}/>
        </a>
      </div>
      <Image src={avatar} alt="#" className={cn.avatar} />
    </div>
  );
};
