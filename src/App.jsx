import React from 'react';
import { Routes, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Upcoming from './pages/Upcoming/Upcoming';
import Now_playing from './pages/Now_playing/Now_playing';
import { AppContainer } from './styles/reset';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TopRated from './pages/TopRated/TopRated';
import Search from './pages/Search/Search';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <AppContainer className="App">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/now_playing" element={<Now_playing />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/top_rated" element={<TopRated />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<List />} />
          </Routes>

          <ScrollTop />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
