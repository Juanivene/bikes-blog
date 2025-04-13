import React from 'react';

import AllBikes from '@/components/ui/components/AllBikes/AllBikes';
import Footer from '@/components/ui/components/Footer/Footer';
import Header from '@/components/ui/components/Header/Header';

const page = (): React.ReactElement => (
  <>
    <Header />
    <AllBikes />
    <Footer />
  </>
);

export default page;
