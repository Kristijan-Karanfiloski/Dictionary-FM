import Search from "../../../public/icon-search.svg";
import "./SearchInput.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getWordsFromDictionary,
  inputSearch,
} from "../../store/searchInputSlice.jsx";
import { useState } from "react";

const SearchInput = () => {
  const theme = useSelector((state) => state.themePicker.value);
  const font = useSelector((state) => state.fontFamily.font);
  const search = useSelector((state) => state.searchInput.value);
  const dispatch = useDispatch();

  const [isValid, setIsValid] = useState(false);

  // console.log(search);

  // const handleKeyPress = (e) => {
  //   if (e.charCode === 13) {
  //     // Call your API or any other function you want to execute on Enter press
  //   }
  // };

  const handleSearchClick = () => {
    if (search) {
      dispatch(getWordsFromDictionary(search));
    } else {
      setIsValid(true);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (search === "") {
      setIsValid(true);
    }

    if (search) {
      dispatch(getWordsFromDictionary(search));
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
      <form
        onClick={handleOnSubmit}
        className="searchInputWrapper"
        style={{ fontFamily: `${font}` }}
      >
        <input
          className={`searchInput ${
            theme === "dark" ? "searchInputDarkTheme" : "searchInputLightTheme"
          }`}
          type="text"
          placeholder="Search for any word..."
          value={search}
          onChange={(e) => dispatch(inputSearch(e.target.value))}
        />
        <button
          className="searchInput__icon"
          type="submit"
          onClick={handleSearchClick}
        >
          <img src={Search} alt="search icon" />
        </button>
      </form>
      {isValid && (
        <p
          className="searchInput__errorMessage"
          style={{ fontFamily: `${font}` }}
        >
          Whoops, cant be empty...
        </p>
      )}
    </>
  );
};

export default SearchInput;
