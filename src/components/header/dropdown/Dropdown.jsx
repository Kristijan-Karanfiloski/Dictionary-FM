import "./Dropdown.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFont } from "../../../store/selectFontSlice.jsx";
import DropIcon from "../../../../public/icon-arrow-down.svg";
import { useState } from "react";

const Dropdown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const theme = useSelector((state) => state.themePicker.value);
  const font = useSelector((state) => state.fontFamily.font);
  const dispatch = useDispatch();

  const handleDropdownFontChange = (value) => {
    dispatch(selectFont(value));
  };

  const handleOpenUl = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="selectWrapper">
      <button
        onClick={handleOpenUl}
        className={`selectWrapper_btn ${
          theme === "dark"
            ? "selectWrapper_btn_darkTheme"
            : "selectWrapper_btn_whiteTheme"
        }`}
        style={{ fontFamily: `${font}` }}
      >
        {/*<select*/}
        {/*  className={`select ${*/}
        {/*    theme === "dark" ? "selectDarkTheme" : "selectLightTheme"*/}
        {/*  }`}*/}
        {/*  defaultValue="Mono"*/}
        {/*  onChange={(e) => dispatch(selectFont(e.target.value))}*/}
        {/*>*/}
        {/*  <option value="sans-serif">Sans Serif</option>*/}
        {/*  <option value="serif">Serif</option>*/}
        {/*  <option value="monospace">Mono</option>*/}
        {/*</select>*/}
        {font}
        {/*<img className="selectWrapper__img" src={DropIcon} alt="drop icon" />*/}
        <img src={DropIcon} alt="drop icon" />
      </button>
      {openDropDown && (
        <div
          className={`selectWrapper_ul ${
            theme === "dark"
              ? "selectWrapper_ul__dark"
              : "selectWrapper_ul__white"
          }`}
        >
          <p
            data-value="sans-serif"
            onClick={() => handleDropdownFontChange("sans-serif")}
          >
            Sans Serif
          </p>
          <p
            data-value="serif"
            onClick={() => handleDropdownFontChange("serif")}
          >
            Serif
          </p>
          <p
            data-value="monospace"
            onClick={() => handleDropdownFontChange("monospace")}
          >
            Mono
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

//
// <ul>
//     <li>Sans Serif</li>
//     <li>Serif</li>
//     <li>Mono</li>
// </ul>
