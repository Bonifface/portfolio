'use client';

import cn from "./Topbar.module.scss";
// import {Loader} from "@components/Topbar/Loader/Loader";

export const Topbar = () => {
  return (
    <div className={cn.topbar}>
      <h2 className={cn.title}>B</h2>
      {/*<Loader />*/}
      <div className={cn.navigation}>
        <a href={"#projects"} className={cn.navBtn}>
          Projects
        </a>
        <a href={"#about"} className={cn.navBtn}>
          About
        </a>
        <a href={"#contact"} className={cn.navBtn}>
          Contact
        </a>
      </div>
    </div>
  );
};
