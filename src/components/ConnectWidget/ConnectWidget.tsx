import React, { useState } from "react";
import BackArrow from "../BackArrow";
import ConnectDB from "./ConnectDB";
import SchemaComponent from "./SchemaComponent";
import TimelinesComponent from "./TimelinesComponent";
import TimelineComponent from "./TimelineComponent";

import "./index.css";

export interface SelectedTime {
  timeLine: string
  time: string
  value: any
}

interface PropsType {
  className?: string | undefined
}

const StorageTimelineWidget = ({ className }: PropsType) => {
  const [step, setStep] = useState(0);

  const [urlDb, setUrlDb] = useState("");
  const [schemas, setSchemas] = useState([]);
  const [currentSchema, setCurrentSchema] = useState("");
  const [timeLines, setTimeLines] = useState([]);
  const [selectedTime, setSelectedTime] = useState<SelectedTime>({time:'', timeLine:"", value:""});

  const getSchema = async () => {
    if (!urlDb) return;
    try {
      const req = await fetch(urlDb, {
        method: "GET",
      });
      const res = await req.json();
      setSchemas(res);
      setStep(1);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getListTimeLines = async (schema: string) => {
    if (!urlDb || !schema) return;
    setCurrentSchema(schema);
    try {
      const req = await fetch(`${urlDb}?schema=${schema}/`, {
        method: "GET",
      });
      const res = await req.json();
      setTimeLines(res);
      setStep(2);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeLine = async (timeLine: string, format: string = "string") => {
    if (!urlDb || !currentSchema || !timeLine) return;
    try {
      console.log(currentSchema);
      console.log(timeLine);
      const req = await fetch(
        `${urlDb}?schema=${currentSchema}&timeLine=${timeLine}&format=${format}`,
        {
          method: "GET",
        }
      );
      const res = await req.json();
      setSelectedTime({ timeLine, ...res[0] });
      setStep(3);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`main-widget ${className}`}>
      {step === 0 && <ConnectDB urlDb={urlDb} setUrlDb={setUrlDb} getSchema={getSchema}/>}
      {step === 1 && <SchemaComponent schemas={schemas} setStep={setStep} getListTimeLines={getListTimeLines}/>}
      {step === 2 && <TimelinesComponent setStep={setStep} timeLines={timeLines} getTimeLine={getTimeLine}/>}
      {step === 3 && <TimelineComponent setStep={setStep} selectedTime={selectedTime}/>}
    </div>
  );
};

export default StorageTimelineWidget;
