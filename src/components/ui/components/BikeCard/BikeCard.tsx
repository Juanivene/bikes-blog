type Props = {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
};
const BikeCard = (props: Props): React.ReactElement => {
  const { title, description, isFavorite, id } = props;
  return (
    <article>
      <p>{id}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{isFavorite}</p>
    </article>
  );
};

export default BikeCard;
