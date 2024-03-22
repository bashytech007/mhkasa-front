import { useRef, useState } from "react";
import { handleHorizantalScroll } from "../../utils/horizontalScroll";

export default function useLongPress() {
  const [element, setElement] = useState();
  const timerRef = useRef();
  const isLongPress = useRef();
  const scrollRef = useRef();

  function startPressTimer(direction) {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      scrollRef.current = setInterval(() => {
        if (direction === "forward") {
          handleHorizantalScroll(element, 20);
        } else {
          handleHorizantalScroll(element, -20);
        }
      }, 10);
    }, 500);
  }

  function handleOnClick(direction) {
    if (isLongPress.current) {
      clearInterval(scrollRef.current);
      return;
    }
    // move elenent by 100px
    if (direction === "forward") {
      handleHorizantalScroll(element, 30);
    } else {
      handleHorizantalScroll(element, -30);
    }
  }

  function handleOnMouseDown(direction) {
    startPressTimer(direction);
  }

  function handleOnTouchStart(direction) {
    startPressTimer(direction);
  }

  function handleOnMouseUp() {
    if (isLongPress.current) {
      //   terminate scroll
      clearInterval(scrollRef.current);
      return;
    }
    clearTimeout(timerRef.current);
  }

  function handleOnTouchEnd() {
    if (isLongPress.current) {
      //   terminate scroll
      clearInterval(scrollRef.current);
      return;
    }
    clearTimeout(timerRef.current);
  }

  function handleOnTouchCancel() {
    if (isLongPress.current) {
      clearInterval(scrollRef.current);
      return;
    }
    clearTimeout(timerRef.current);
  }

  const getHandlers = (direction) => {
    return {
      onClick: () => handleOnClick(direction),
      onMouseDown: () => handleOnMouseDown(direction),
      onMouseUp: handleOnMouseUp,
      onTouchStart: () => handleOnTouchStart(direction),
      onTouchEnd: handleOnTouchEnd,
      onTouchCancel: handleOnTouchCancel,
    };
  };

  return {
    getHandlers,
    setElement,
  };
}
