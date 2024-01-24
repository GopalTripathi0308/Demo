import ConveyancingForm from "@/modules/conveyancing/components/conveyancingForm";
import { DESCRIPTION_CONTENT } from "@/modules/conveyancing/constants/conveyancingDescription.constant";
import QnASection from "./QnASection";
import { FREQUENTLY_ASKED_QUESTIONS } from "../constants/conveyancingQnA.constant";

const ConveyancingDescription = () => {
  //
  const renderYoutubeVideo = () => (
    <div className="rounded-xl overflow-hidden h-[198px] lg:h-[446px] lg:mb-4">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src="https://www.youtube.com/embed/SklG0T_W0ao"
        title="YouTube video player"
      ></iframe>
    </div>
  );

  const renderDescription = () => (
    <div className="mb-8 lg:mb-16 text-default">
      {DESCRIPTION_CONTENT.map((para) => (
        <p className="text-base font-normal mb-4" key={para.id}>
          {para.content}
        </p>
      ))}
    </div>
  );

  return (
    <section className="w-full flex flex-col xl:flex-row text-default mt-8">
      <div className="flex flex-col w-full gap-2">
        {renderYoutubeVideo()}
        {renderDescription()}
        <div className="pb-4">
          <h2 className="text-2xl font-bold undefined mb-4 lg:mb-6">
            Frequently Asked Questions
          </h2>
          {FREQUENTLY_ASKED_QUESTIONS.map((qna, index) => (
            <QnASection
              content={qna}
              key={qna.id}
              border={index !== FREQUENTLY_ASKED_QUESTIONS.length - 1}
              height="4px"
            />
          ))}
        </div>
      </div>
      {<ConveyancingForm />}
    </section>
  );
};

export default ConveyancingDescription;
