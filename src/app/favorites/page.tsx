import FavoritesCardsContainer from '@/components/ui/components/FavoritesCardsContainer/FavoritesCardsContainer';
import Footer from '@/components/ui/components/Footer/Footer';
import Header from '@/components/ui/components/Header/Header';

const Favorites = (): React.ReactElement => (
  <div>
    <Header />
    <FavoritesCardsContainer />
    <Footer />
  </div>
);

export default Favorites;
