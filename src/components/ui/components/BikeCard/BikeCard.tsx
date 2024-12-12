type Props = {
  title: string;
  description: string;
  isFavorite: boolean;
};
const BikeCard = (props: Props): React.ReactElement => {
  const { title, description, isFavorite } = props;
  return (
    <article className="m-4 rounded-lg border border-gray-200 bg-slate-300 p-4 shadow-md">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="mt-2 flex items-center">
          <p className="text-sm font-medium">
            Favorito:
            <span className="text-{isFavorite ? 'green-500' : 'red-500'}">
              {isFavorite ? 'Sí' : 'No'}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default BikeCard;
