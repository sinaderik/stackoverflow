import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

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
        </>
    );
};

export default Home;