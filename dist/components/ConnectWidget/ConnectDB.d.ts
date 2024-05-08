import React from 'react';
interface PropsType {
    urlDb: string;
    setUrlDb: any;
    getSchema: () => Promise<void>;
}
declare const ConnectDB: ({ urlDb, setUrlDb, getSchema }: PropsType) => React.JSX.Element;
export default ConnectDB;
