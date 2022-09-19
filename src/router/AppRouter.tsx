import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import StoriesPage from '../components/StoriesPage';
import PageNotFound from '../components/PageNotFound';
import NewsType from '../entity/NewsType';



function AppRouter(){
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<StoriesPage newsType={NewsType.top}/>} />
          <Route path="/news" element={<StoriesPage newsType={NewsType.top}/>} />
          <Route path="/newest" element={<StoriesPage newsType={NewsType.new} />} />
          <Route path="/best" element={<StoriesPage newsType={NewsType.best} />} />
          <Route path="/ask" element={<StoriesPage newsType={NewsType.ask} />} />
          <Route path="/show" element={<StoriesPage newsType={NewsType.show} />} />
          <Route path="/jobs" element={<StoriesPage newsType={NewsType.job} />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;