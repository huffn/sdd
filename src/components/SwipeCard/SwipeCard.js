import React from "react";
import TinyGesture from "tinygesture";

const SwipeCard = ({ profilePic, name, age, bio, addTilt = false }) => {
  const cardRef = React.createRef();

  const [removed, setRemoved] = React.useState(false);

  React.useEffect(() => {
    if (cardRef && cardRef.current) {
      const gesture = new TinyGesture(cardRef.current);
      const swipeLeft = gesture.on("swipeleft", event => {
        cardRef.current.classList.add("rotate-right");
        swipeLeft.cancel();
        gesture.destroy();
        setTimeout(() => {
          setRemoved(true);
        }, 1200);
      });
      const swipeRight = gesture.on("swiperight", event => {
        cardRef.current.classList.add("rotate-left");
        swipeRight.cancel();
        gesture.destroy();
        setTimeout(() => {
          setRemoved(true);
        }, 1200);
      });
    }
  }, [cardRef]);

  const props = {
    ref: cardRef
  };
  if (addTilt) {
    props.style = {
      transform: `rotate(${Math.random() * 10 - 5}deg)`
    };
  }

  if (!removed) {
    return (
      <div className="swipeProfile" {...props}>
        <div
          className="profilePic"
          style={{ backgroundImage: `url(${profilePic})` }}
        ></div>
        <div className="name">{name}</div>
        <div className="age">{age}</div>
        <div className="bio">{bio}</div>
      </div>
    );
  }
  return false;
};

export default SwipeCard;
