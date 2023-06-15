import React, { useEffect, useState } from 'react';
import articlePhoto from '@Images/logo.svg';
interface articleData {
  image: string;
  title: string;
  articleName: string;
  author: string;
  creation_date: string;
}

const ArticleSection = () => {
  // const [photoUrls, setPhotoUrls] = useState([]);
  const data: articleData[] = [
    {
      image: 'logo.svg',
      title: 'testTest',
      articleName: '測試文章',
      author: '王曉明',
      creation_date: '2023/06/14'
    },
    {
      image: 'logo.svg',
      title: 'testTest2',
      articleName: '測試文章2',
      author: '陳小美',
      creation_date: '2023/06/14'
    },
    {
      image: 'logo.svg',
      title: 'testTest3',
      articleName: '測試文章3',
      author: '林強',
      creation_date: '2023/06/14'
    },
    {
      image: 'logo.svg',
      title: 'testTest4',
      articleName: '測試文章4',
      author: '黃大力',
      creation_date: '2023/06/14'
    }
  ];

  //TODO: 引用多張照片
  //   useEffect(() => {
  //     const loadPhotos = async () => {
  //       const variableNames = data.map((v) => v.image);
  //       const promises = variableNames.map(async (variableName) => {
  //         const photo = await import(`./assets/${variableName}`);
  //         return photo;
  //       });
  //       const photos = await Promise.all(promises);
  //       setPhotoUrls(photos);
  //     };
  //     loadPhotos();
  //   }, []);

  return (
    <>
      <div className="container mx-auto flex items-center justify-center gap-3 py-5">
        <p className="cursor-pointer whitespace-nowrap text-heading_4 font-bold text-primary-darkGreen ">
          音樂文章
        </p>
        <p className="font-Noto_Serif_Display text-heading_4 font-bold text-primary-darkGreen">
          ARTICLE
        </p>
        <div className="h-[3px] w-full bg-primary-gary"></div>
      </div>
      <div className="container mx-auto bg-primary-garyLight">
        <div className="grid grid-cols-12 pt-[35px]">
          {data.map((article, index) => {
            return (
              <div className="col-span-4 max-md:col-span-12 pb-5">
                <div className="hover:-translate-x-[20px] hover:bg-primary-garyLight hover:transition-all">
                  {/* <Link to={`/news/${article.id}?mainId=${article.category}`}> */}
                  {/* TODO: 待處理BE回傳的照片檔名 require(`../../assets/${article.image}`) */}
                  <div className="flex items-center justify-center">
                    <img
                      src={articlePhoto}
                      key={`${article.image}_${index}`}
                      alt="art"
                      className="h-[280px] w-full object-contain"
                    />
                  </div>

                  <div className="text-heading_6 text-primary-iron">
                    <div className="m-2">{article.title}</div>
                    <div className="m-2 flex gap-1 items-center">
                      <div className="flex justify-center items-center h-[25px] bg-primary-gary text-small leading-6 text-primary-beige">
                       <p>{article.articleName}</p>
                      </div>
                      <p>
                        {article.author}－{article.creation_date}
                      </p>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArticleSection;
