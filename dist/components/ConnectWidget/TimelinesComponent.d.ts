import React from 'react';
interface PropsType {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    timeLines: string[];
    getTimeLine: (timeLine: string, format?: string) => Promise<void>;
}
declare const TimelinesComponent: ({ setStep, timeLines, getTimeLine }: PropsType) => React.JSX.Element;
export default TimelinesComponent;
