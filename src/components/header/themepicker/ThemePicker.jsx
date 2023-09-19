import "./ThemePicker.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/themePickerSlice.jsx";
import MoonSvg from "../../../svg/MoonSvg.jsx";

const ThemePicker = () => {
  const theme = useSelector((state) => state.themePicker.value);
  const dispatch = useDispatch();

  // console.log("Current theme :", theme);

  const handleThemeSwitch = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="themePicker__wrapper">
      <div className={`container ${theme}`}>
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            name="switch"
            id="switch"
            checked={theme === "dark"}
            onChange={handleThemeSwitch}
          />
          <label className="label" htmlFor="switch">
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
      <div onClick={handleThemeSwitch}>
        {/*<img src={Moon} alt="moon icon" style={{ color: "red" }} />*/}
        <MoonSvg storke={theme === "dark" ? "#A445ED" : "grey"} />
      </div>
    </div>
  );
};

export default ThemePicker;
