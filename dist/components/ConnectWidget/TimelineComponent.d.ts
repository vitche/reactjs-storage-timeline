import React from 'react';
import { SelectedTime } from './ConnectWidget';
interface PropsType {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    selectedTime: SelectedTime;
}
declare const TimelineComponent: ({ setStep, selectedTime }: PropsType) => React.JSX.Element;
export default TimelineComponent;
