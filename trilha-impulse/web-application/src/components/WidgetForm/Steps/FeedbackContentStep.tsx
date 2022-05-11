import { FeedbackType, feedbackTypes } from "..";
import { BackButton } from "../../BackButton";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export function FeedbackContentStep ({ feedbackType }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header>
        <BackButton />
        <div className="flex flex-row">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
          <span className="text-xl leading-6">{feedbackTypeInfo.title}</span>
        </div>
        <CloseButton />
      </header>
      <section className="flex justify-between py-8 gap-2 w-full">
        
      </section>
    </>
  )
}