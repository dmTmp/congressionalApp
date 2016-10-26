// @flow
import React from 'react'

export default function<T>(props:{lastValue:T, edit:boolean, update:(x:T) => void, toggleEdit:() => void}) {
  let SwitchButton = (sProps:{text:string}) => <button style={{color:'#000099'}}>{sProps.text}</button>
  return props.edit
    ? <p>
      {props.lastValue}
      <SwitchButton text={'edit'}/>
    </p>
    : <div>
      <input onChange={props.update} value={props.lastValue}/>
      <SwitchButton text={'submit'}/>
    </div>
}
