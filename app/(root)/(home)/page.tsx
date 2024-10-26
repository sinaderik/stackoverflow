
import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";

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
                <LocalSearch />
                <Filter />
            </div>
        </>
    );
};

export default Home;