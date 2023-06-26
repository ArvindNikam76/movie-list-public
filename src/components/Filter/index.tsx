import { SORT_BY } from "./constatnt";

type props = {
  onFilterChange: Function;
};

const Filter = ({ onFilterChange }: props) => {
  const handleFilterChange = (event: any) => {
    onFilterChange(event.target.value);
  };
  return (
    <select
      onChange={handleFilterChange}
      className="filter-section"
      name="movies"
      id="movies"
    >
      <option value="">Sort By...</option>
      <option value={SORT_BY.episodeId}>{SORT_BY.episodeId}</option>
      <option value={SORT_BY.releasedate}>{SORT_BY.releasedate}</option>
    </select>
  );
};

export default Filter;
