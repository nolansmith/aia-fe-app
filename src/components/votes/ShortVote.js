import React from "react";
import { FaCaretUp as UpVote, FaCaretDown as DownVote } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

function ShortVote({  size, action, id, limit, answer: { questionId: qid, text } }) {
  function VoteAction() {
    return action === "up" ? (
      <UpVote className="text-success" />
    ) : (
      <DownVote className="text-danger" />
    );
  }

  return (
    <div className="row" style={{ margin: "0 0" }}>
      <div
        id={`vote-${id}`}
        className={
          size ? size + " card bg-light" : "col-lg-8 col-xs-12 card bg-light"
        }
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: "0 5px",
          margin: "5px auto 0px auto",
          width: "100%",
        }}
      >
        <div style={{ width: "100%", margin: "20px auto" }}>
          <Link to={`/question/${qid}#answer-${qid}-${id}`} className="aw-link">
            {limit ? text.slice(0, limit) + "..." : text}
          </Link>{" "}
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <h3>
            <VoteAction />
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ShortVote;
