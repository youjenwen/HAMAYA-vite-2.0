import React from 'react';
import './videoBanner.scss';
import homeVideo from '@Stories_assets/home-video.mp4';
import Note1 from '@Stories_assets/note-1.svg';
import Note2 from '@Stories_assets/note-2.svg';
import Note3 from '@Stories_assets/note-3.svg';
import Note4 from '@Stories_assets/note-4.svg';
import Note5 from '@Stories_assets/note-5.svg';

const VideoBanner = () => {
  return (
    <>
      <div className="--videoBanner z-[100] grid h-screen grid-cols-[2fr,3fr] items-center bg-primary-garyLight pb-4 text-primary-darkGreen  max-md:h-[40vh]">
        <div className="--title z-[2] col-span-full row-start-1 row-end-auto mb-12 w-full pl-[1.5em] text-[15vmin] max-md:relative max-md:bottom-[-0.5rem] max-md:right-4 max-md:pl-[1em] max-md:pt-10 max-md:text-center max-md:text-[10vmin]">
          <div className="title-inner">
            <div className="cafe">
              <div className="cafe-inner ">HAMAYA</div>
            </div>
            <div className="mozart">
              <div className="mozart-inner ">MUSIC</div>
            </div>
            <div className="relative bottom-[-5rem] right-[2rem] text-[2vmin] max-md:bottom-[-0.5rem] max-md:right-4 max-md:text-center max-md:text-paragraph max-md:font-bold">
              <span className="">
                將光亮從人心靈的深沈中釋放出來，是音樂的神聖使命。 ——羅伯特·亞歷山大·舒曼
              </span>
            </div>
          </div>
        </div>
        <div className="home-video home-video2 col-start-2 col-end-auto row-start-1 row-end-auto ml-[-1rem] aspect-video opacity-70 max-md:hidden">
          <video
            muted
            src={homeVideo}
            width=""
            autoPlay
            loop
            className="mt-20 inline-block h-[70vh] w-full object-cover"
          />
        </div>
        <div className="hidden max-md:block">
          <div className="noot-1">
            <img src={Note1} alt="" />
          </div>
          <div className="noot-2">
            <img src={Note2} alt="" />
          </div>
          <div className="noot-3">
            <img src={Note3} alt="" />
          </div>
          <div className="noot-4">
            <img src={Note4} alt="" />
          </div>
          <div className="noot-5">
            <img src={Note5} alt="" width="30" />
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        <div className="noot-1">
          <img src={Note1} alt="" width="15" />
        </div>
        <div className="noot-2">
          <img src={Note2} alt="" width="15" />
        </div>
        <div className="noot-3">
          <img src={Note3} alt="" width="15" />
        </div>
        <div className="noot-4">
          <img src={Note4} alt="" width="15" />
        </div>
        <div className="noot-5">
          <img src={Note5} alt="" width="15" />
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
