import React from "react";
import Form from "../forms/ask";
import QuestionText from "./QuestionText";
import QuestionSubmit from "./QuestionSubmit";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAskFormSubmitted,
} from "./store/actions";

export default function AskQuestion(props) {
  const { askForm } = useSelector(state => state);
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();

    //console.log('Asking question: ', question);

    dispatch(updateAskFormSubmitted(true));
  }

  return (
    <>
      <Form submit={submit} {...askForm.options}>
        <QuestionText />
        <QuestionSubmit />
      </Form>
    </>
  );
}
