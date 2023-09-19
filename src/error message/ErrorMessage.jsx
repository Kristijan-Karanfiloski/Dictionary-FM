import "./ErrorMessage.scss";
import { useSelector } from "react-redux";

const ErrorMessage = () => {
  const font = useSelector((state) => state.fontFamily.font);
  return (
    <>
      <div className="errorWrapper" style={{ fontFamily: `${font}` }}>
        <p>😕</p>
        <h6>No definitions Found</h6>
        <p>
          Sorry pal, we couldn't find definitions for the word you were looking
          for.You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </>
  );
};

export default ErrorMessage;
