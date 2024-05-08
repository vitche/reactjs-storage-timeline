import React from "react";
import "./index.css";
export interface SelectedTime {
    timeLine: string;
    time: string;
    value: any;
}
interface PropsType {
    className?: string | undefined;
}
declare const StorageTimelineWidget: ({ className }: PropsType) => React.JSX.Element;
export default StorageTimelineWidget;
