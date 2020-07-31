import React from 'react';

export default function Fact({fact}) {
const {text, upvotes} = fact;
  return (
    <div>
      <p>{text}</p>
      <p>{`Upvotes: ${upvotes}`}</p>
    </div>
  )
}







