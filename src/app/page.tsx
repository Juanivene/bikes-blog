import React from 'react';

import CardsContainer from '@/components/ui/components/CardsContainer/CardsContainer';
import TitleFormView from '@/components/ui/components/TitleFomView/TitleFormView';

const Home = (): React.ReactElement => (
  <>
    <TitleFormView />
    <CardsContainer />
  </>
);

export default Home;
