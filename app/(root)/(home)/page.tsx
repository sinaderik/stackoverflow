import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

type HomePageQuestions = {
  _id: string;
  title: string;
  tags: { _id: number; name: string }[];
  author: { _id: string; name: string; picture: string };
  upvotes: string;
  views: string;
  answers: [];
  createdAt: Date;
}[];

const questions: HomePageQuestions = [
  {
    _id: "1",
    title: "How to open a link in a new Tab in NextJS?",
    tags: [{ _id: 1, name: "next.js" }],
    author: { _id: "1", name: "John doe", picture: "john.jpg" },
    upvotes: "14",
    views: "35",
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: 1, name: "css" },
      { _id: 2, name: "html" },
    ],
    author: { _id: "2", name: "alex fi", picture: "alex.jpg" },
    upvotes: "9",
    views: "26",
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center gap-4 w-full">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col justify-between items-center gap-5 mt-11">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex w-full"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col gap-6 w-full">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nostrum,
            provident necessitatibus eius quaerat maiores esse fuga, corrupti magni
            officiis tempora dolores tenetur in adipisci. Accusamus, laborum
            quisquam corrupti beatae"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
