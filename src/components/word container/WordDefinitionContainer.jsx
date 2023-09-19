import { useDispatch, useSelector } from "react-redux";
import Play from "../../../public/icon-play.svg";
import { getWordsFromDictionary } from "../../store/searchInputSlice.jsx";
import "./WordDefinitionContainer.scss";
import { useEffect } from "react";
import NewWindow from "../../../public/icon-new-window.svg";

const WordDefinitionContainer = () => {
  const font = useSelector((state) => state.fontFamily.font);
  const { wordsData, status } = useSelector((state) => state.searchInput);
  const search = useSelector((state) => state.searchInput.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getWordsFromDictionary("keyboard"));
    if (search) {
      dispatch(getWordsFromDictionary(search));
    }
  }, [dispatch]);
  //
  if (status === "Rejected") {
    return (
      <>
        <div className="errorWrapper" style={{ fontFamily: `${font}` }}>
          <p>😕</p>
          <h6>{wordsData.title}</h6>
          <p>{wordsData.message}</p>
        </div>
        {/*<h2>Sorry</h2>*/}
      </>
    );
  }

  ////////////////////////////////////////////////////////////////

  const handlePlayAudio = (data) => {
    const audioData = data.find((item) => item.audio !== "");
    console.log(audioData);

    const audio = new Audio(audioData.audio);
    audio.play();
  };

  // console.log(wordsData);

  return (
    <>
      {wordsData?.map((word, index) => (
        <div
          key={index}
          style={{ fontFamily: `${font}` }}
          className="wordInformationContainer"
        >
          <div className="wordContainer">
            <div className="wordContainer_leftSide">
              <h2 className="wordContainer_leftSide__h2">{word?.word}</h2>
              <p className="wordContainer_leftSide__p">{word?.phonetic}</p>
            </div>

            <button
              onClick={() => handlePlayAudio(word?.phonetics)}
              // type="button"
              className="wordContainer_rightSide"
              // src={word?.phonetics[2].audio}
            >
              <img src={Play} alt="play" />
            </button>
          </div>

          {/*{word?.meanings?.map((meaning, meaningIndex) => (*/}
          {/*  <div key={meaningIndex}>*/}
          {/*    <div className="synonym-container">*/}
          {/*      <span className="synonym-container_text">*/}
          {/*        {meaning?.partOfSpeech}*/}
          {/*      </span>*/}
          {/*      <hr className="synonym-container__line" />*/}
          {/*    </div>*/}

          {/*    <div className="meanings-container">*/}
          {/*      <p className="meanings-container_p">Meaning</p>*/}
          {/*      <ul className="meanings-container_ul">*/}
          {/*        {meaning?.definitions?.map((definition, definitionIndex) => (*/}
          {/*          // <li key={definitionIndex}>{definition?.definition}</li>*/}

          {/*          <li key={definitionIndex}>*/}
          {/*            {definition.definition}*/}
          {/*            {definition.example && <p>{definition.example}</p>}*/}
          {/*          </li>*/}
          {/*        ))}*/}
          {/*      </ul>*/}
          {/*      <div className="synonyms-container">*/}
          {/*        <p className="synonyms-container__p1">Synonyms</p>*/}
          {/*        /!*{meaning?.synonyms?.join(", ")}*!/*/}
          {/*        {meaning?.synonyms.length !== 0 && (*/}
          {/*          <p className="synonyms-container__p2">*/}
          {/*            /!*{meaning?.synonyms?.join(", ")}*!/*/}
          {/*            {meaning?.synonyms.join(", ")}*/}
          {/*          </p>*/}
          {/*        )}*/}
          {/*        /!*<p className="synonyms-container__p2"></p>*!/*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    <div className="example-sentence-container">*/}
          {/*      /!*<p className="example-sentence-container_p1">Example</p>*!/*/}
          {/*      <ul className="example-sentence-container_ul">*/}
          {/*        {meaning?.definitions?.map((definition, definitionIndex) => (*/}
          {/*          <p key={definitionIndex}>{definition?.example}</p>*/}
          {/*        ))}*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*))}*/}

          {/*////////////////////////////////////////////////////////////////////////////////////////////////*/}

          {word?.meanings?.map((meaning, meaningIndex) => (
            <div key={meaningIndex}>
              <div className="synonym-container">
                <span className="synonym-container_text">
                  {meaning?.partOfSpeech}
                </span>
                <hr className="synonym-container__line" />
              </div>

              <div className="meanings-container">
                <p className="meanings-container_p">Meaning</p>
                <ul className="meanings-container_ul">
                  {meaning?.definitions?.map((definition, definitionIndex) => (
                    // <li key={definitionIndex}>{definition?.definition}</li>

                    <>
                      <li key={definitionIndex}>{definition.definition}</li>
                      <p className="meanings-container_ul__p">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        {/*{definition.example && definition.example}*/}
                        {/*{`${definition.example !== ""}*/}
                        {/*  ? "${definition.example}"*/}
                        {/*  : ${definition.example}`}*/}
                        {/*{`${*/}
                        {/*  definition.example !== ""*/}
                        {/*    ? `"${definition.example}"`*/}
                        {/*    : null*/}
                        {/*}`}*/}
                        {definition.example && `"${definition.example}"`}
                      </p>
                    </>
                  ))}
                </ul>
                {meaning.synonyms.length !== 0 && (
                  <div className="synonyms-container">
                    <p className="synonyms-container__p1">Synonyms</p>
                    {/*{meaning?.synonyms?.join(", ")}*/}
                    <p className="synonyms-container__p2">
                      {/*{meaning?.synonyms?.join(", ")}*/}
                      {meaning?.synonyms.join(", ")}
                    </p>
                    {/*<p className="synonyms-container__p2"></p>*/}
                  </div>
                )}
              </div>

              <div className="example-sentence-container">
                {/*<p className="example-sentence-container_p1">Example</p>*/}
                {/*<ul className="example-sentence-container_ul">*/}
                {/*  {meaning?.definitions?.map((definition, definitionIndex) => (*/}
                {/*    <p key={definitionIndex}>{definition?.example}</p>*/}
                {/*  ))}*/}
                {/*</ul>*/}
              </div>
            </div>
          ))}

          {/*////////////////////////////////////////////////////////////////////////////////////////////////*/}

          <span className="bottom-divider"></span>
          <div className="url-container">
            <p className="url-container_p1">Source</p>
            {word?.sourceUrls?.map((url, urlIndex) => (
              <div key={urlIndex}>
                <div
                  className="url-container-url"
                  // style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                  <img src={NewWindow} alt="window icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default WordDefinitionContainer;

// {
//   word?.meanings?.map((meaning, meaningIndex) => (
//     <div key={meaningIndex}>
//       <div className="synonym-container">
//         <span className="synonym-container_text">{meaning?.partOfSpeech}</span>
//         <hr className="synonym-container__line" />
//       </div>
//
//       <div className="meanings-container">
//         <p className="meanings-container_p">Meaning</p>
//         <ul className="meanings-container_ul">
//           {meaning?.definitions?.map((definition, definitionIndex) => (
//             // <li key={definitionIndex}>{definition?.definition}</li>
//
//             <>
//               <li key={definitionIndex}>{definition.definition}</li>
//               <p>{definition.example && definition.example}</p>
//             </>
//           ))}
//         </ul>
//         {meaning.synonyms.length !== 0 && (
//           <div className="synonyms-container">
//             <p className="synonyms-container__p1">Synonyms</p>
//             {/*{meaning?.synonyms?.join(", ")}*/}
//             <p className="synonyms-container__p2">
//               {/*{meaning?.synonyms?.join(", ")}*/}
//               {meaning?.synonyms.join(", ")}
//             </p>
//             {/*<p className="synonyms-container__p2"></p>*/}
//           </div>
//         )}
//       </div>
//
//       <div className="example-sentence-container">
//         {/*<p className="example-sentence-container_p1">Example</p>*/}
//         <ul className="example-sentence-container_ul">
//           {meaning?.definitions?.map((definition, definitionIndex) => (
//             <p key={definitionIndex}>{definition?.example}</p>
//           ))}
//         </ul>
//       </div>
//     </div>
//   ));
// }
