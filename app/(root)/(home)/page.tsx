
import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import {HomePageFilters} from "@/constants/filter";
import HomeFilters from '@/components/home/HomeFilters';

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
        </>
    );
};

export default Home;