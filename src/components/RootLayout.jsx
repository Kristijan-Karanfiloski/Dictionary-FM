import Header from "./header/Header.jsx";
import "./RootLayout.scss";
import SearchInput from "./search input/SearchInput.jsx";
// import { useState } from "react";
import { useSelector } from "react-redux";
import WordDefinitionContainer from "./word container/WordDefinitionContainer.jsx";

const RootLayout = () => {
  const theme = useSelector((state) => state.themePicker.value);
  // const [isLoading, setIsLoading] = useState(false);
  // const font = useSelector((state) => state.fontFamily.font);
  // console.log("FONT :", font);
  // console.log("THEME FROM ROOT LAYOUT :", theme);

  return (
    <>
      <div
        className={`wrapper ${
          theme === "dark" ? "wrapperDarkTheme" : "wrapperLightTheme"
        }`}
      >
        <Header />
        <main>
          <SearchInput />
          <WordDefinitionContainer />
          {/*{isLoading && <ErrorMessage />}*/}
        </main>
      </div>
    </>
  );
};

export default RootLayout;
