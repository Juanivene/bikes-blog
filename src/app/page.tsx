import React from 'react';

import CardsContainer from '@/components/ui/components/CardsContainer/CardsContainer';
import Footer from '@/components/ui/components/Footer/Footer';
import Header from '@/components/ui/components/Header/Header';
import TitleFormView from '@/components/ui/components/TitleFomView/TitleFormView';

const Home = (): React.ReactElement => (
  <>
    <Header />
    <TitleFormView />
    <CardsContainer />
    <Footer />
  </>
);

export default Home;
