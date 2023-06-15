import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { articleData } from '@Interface/I_homePage';

interface homePageProps {
  homeArticle: articleData[];
  isLoading: boolean;
}

const initialState = {
  homeArticle: [
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
  ],
  isLoading: false
} as homePageProps;

export const homePageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    //TODO:如果有寫後端要記得把型別補上 PayloadAction
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getHomeArticleList: (_state, _action) => undefined,
    setHomeArticleList: (state, action: PayloadAction<articleData[]>) => {
      state.homeArticle = action.payload;
    }
  }
});

export const { setIsLoading, getHomeArticleList, setHomeArticleList } = homePageSlice.actions;
export default homePageSlice.reducer;
