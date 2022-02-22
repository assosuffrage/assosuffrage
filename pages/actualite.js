import React from 'react';
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { page } from "./components/Layout";
import { Timeline } from 'react-twitter-widgets'

const Actualite = () => {
    return (
        <>
        <Head>
          <title>{(page = "actualité")}</title>
        </Head>
        <div
          className="bg-black
          text-white w-full h-screen   flex flex-col justify-start   contacts  "
        >
          <Fade cascade triggerOnce direction={"down"}>
            <div className="flex justify-center items-center">
              <h1 className="flex justify-center  my-4 lg:my-0 text-3xl md:text-5xl underline font-bold text-center">
              ACTUALITÉ POLITIQUE :
              </h1>
            </div>
            
            <div className=" flex flex-col justify-start items-start md:justify-center md:items-center lg:text-left ">
                <article><h2>. ONGLET PRESSE ?</h2></article>
                <article><h2>. QUELQUES ARTICLES DE L'ASSO ? </h2></article>
            </div>
            <div className="md:flex justify-center items-center ">
                <Timeline
                    dataSource={{
                    sourceType: 'profile',
                    screenName: 'AssoSuffrage'
                    }}
                    options={{
                        height: '500',
                        width: '600'
                    }}
                />
            </div>        
          </Fade>
        </div>
      </>
    );
};

export default Actualite;