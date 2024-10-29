import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";

type props = {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; name: string; picture: string };
  upvotes: number;
  views: number;
  answers: [];
  createdAt: Date;
};

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5">
        <div>
          <span className="subtle-regular text-dark-400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* if signed in add edit delete actions  */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between flex-wrap gap-3 mt-6 w-full">
        <Link href={`/profile/${author._id}`}>
          <Metric
            imgUrl="/assets/icons/avatar.svg"
            alt="author"
            value={author.name}
            title={`- asked ${getTimestamp(createdAt)}`}
            isAuthor={true}
            href={`/profile/${author._id}`}
            textStyles="body-medium text-dark400_light700"
          />
        </Link>
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upvote"
          value={formatAndDivideNumber(upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="answers"
          value={formatAndDivideNumber(answers.length)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="views"
          value={formatAndDivideNumber(views)}
          title=" views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
