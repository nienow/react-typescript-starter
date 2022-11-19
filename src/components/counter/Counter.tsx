import React from "react";
import useCounter from "../../hooks/useCounter";
import I18n from "../I18n";
import ActionButton from "../ActionButton";
import ResetButton from "./ResetButton";

const Counter = () => {
  const {count, add, reset} = useCounter();

  return <div>
    <div>
      <I18n name="countDisplay" values={{count}}>Count is {count}</I18n>
    </div>
    <ActionButton onClick={add}>
      <I18n name="add">Add</I18n>
    </ActionButton>
    <ResetButton resetFn={reset} count={count}></ResetButton>
  </div>
}

export default Counter
