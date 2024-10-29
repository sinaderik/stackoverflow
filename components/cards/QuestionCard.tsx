import Link  from "next/link";
import React from "react";

type props = {
  _id: string;
  title: string;
  tags: { _id: number; name: string }[];
  author: { _id: string; name: string; picture: string };
  upvotes: string;
  views: string;
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
            {String(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark-200_light900 line-clamp-1 flex-1">{title}</h3>
          </Link>
        </div>
        {/* if signed in add edit delete actions  */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map(tag=>(
            <p>{tag.name}</p>
        ))}
      </div>
    </div>
  );

};

export default QuestionCard;
