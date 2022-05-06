import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }
  return(
    <div className="absolute bottom-4 right-4">
      {isWidgetOpen && <div className="h-10 w-10 bg-brand-500 mx-auto mb-2 rounded"></div>}
      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-8 h-8"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
            feedback
          </span>
      </button>
    </div>
  )
}