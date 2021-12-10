import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const tags = [];
  const formCount = () => {
    return count === 0 ? <h1>"Ноль"</h1> : count;
  };
  // const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");
  // const styles = {
  //   fontSize: "100px",
  //   fontWeight: "bold",
  // };

  const getBadgesClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  // const renderTags = () => {
  //   if (tags.length === 0) return "Тегов не найдено";
  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // };
  const handleIncrement = (productId) => {
    console.log(`Нажат '+' для product -`);
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    if (count === 0) {
      return count;
    } else {
      console.log(`Нажат '-' для product -`);
      console.log(productId);
      setCount(count - 1);
    }
  };
  return (
    <React.Fragment>
      {/* <img src={imageUrl} alt="" /> */}
      {/* {tags.length === 0 && "Теги не найдени"}
      {renderTags()} */}
      <span className={getBadgesClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
