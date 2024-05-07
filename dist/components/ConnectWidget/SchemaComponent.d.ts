import React from 'react';
interface PropsType {
    schemas: string[];
    setStep: React.Dispatch<React.SetStateAction<number>>;
    getListTimeLines: (schema: string) => Promise<void>;
}
declare const SchemaComponent: ({ schemas, setStep, getListTimeLines }: PropsType) => React.JSX.Element;
export default SchemaComponent;
