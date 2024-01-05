import React from 'react'


export default function ToggleBar({icon,onToggle}) {




  return (
    <div className="rounded-xl bg-green w-fit p-1 border-[0.2px] border-green-500 hover:cursor-pointer" onClick={onToggle}>
        {icon}
  </div>
  )
}
