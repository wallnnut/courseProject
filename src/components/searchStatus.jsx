import React from "react";

const SearchStatus = ({length}) => {
    let txt = [' человек', ' человека', ' человек']
  let cases = [2, 0, 1, 1, 1, 2];
  let verb = length > 1 ? ' тусанут' : ' тусанет'
  let phrase = txt[(length % 100 > 4 && length % 100 < 20) ? 2 : cases[(length % 10 < 5) ? length % 10 : 5]];
  const res = length + phrase + verb + ' с тобой'
  if (length === 0) {
    return (
      <h2>
    <span className="badge bg-danger">
      {res}
    </span>
  </h2>
    )
  }
  return (
    <h2>
    <span className="badge bg-primary">
      {res}
    </span>
  </h2>
  )
}

export default SearchStatus