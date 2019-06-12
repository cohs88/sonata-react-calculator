import React from 'react';
import Result from './Result';

const ResultList = (props) => {
    const results = props.results.map((result) => {
        return <Result result={result} />
    });
    return (
        <div>
            {results}
        </div>
    );
};

export default ResultList;