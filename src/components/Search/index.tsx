type props = {
  onSearch: Function;
};
const Search = ({ onSearch }: props) => {
  const debounceFun = (func: Function, delay: number = 1000) => {
    let timer: any;
    return (...args: string[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
  const onSearchDebounce = debounceFun(onSearch, 1000);
  const handleSearch = ({ target }: any) => {
    onSearchDebounce(target.value);
  };

  return (
    <input
      placeholder="Type to search..."
      type="text"
      onChange={handleSearch}
    />
  );
};

export default Search;
