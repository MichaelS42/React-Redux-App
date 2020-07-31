import React from 'react';
import {useSelector} from 'react-redux';
import Fact from './Fact';

export default function FactList(){
  const facts = useSelector(state => state.facts);

  return (
    <div>
      {facts.map(fact => <Fact key={fact._id} fact={fact} />)}
    </div>
  )
};







