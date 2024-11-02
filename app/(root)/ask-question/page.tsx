import Question from '@/components/forms/Question';
import React from 'react';

const AskQuestion = () => {
    return (
        <div className='text-dark400_light900'>
            <h1 className='h1-bold text-dark100_light900'>Ask a question</h1>
            <div className='mt-9'>
            <Question />
            </div>
        </div>
    );
};

export default AskQuestion;