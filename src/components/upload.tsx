import * as React from 'react';
import { Upload, UploadFileRestrictions, UploadFileStatus } from '@progress/kendo-react-upload';
import '@progress/kendo-theme-default/dist/all.css';

interface AppState {
    status: string;
}

class UploadDemo extends React.Component<{}, AppState> {
    render() {
        const restrictions: UploadFileRestrictions = {
            allowedExtensions: ['.jpg', '.png'],
            maxFileSize: 6000000,
            minFileSize: 500000
        };

        return (
            <div>
                <div tabIndex={0} style={{border: '1px solid rgba(0, 0, 0, 0.08)', margin: 10}}>Prev Component</div>
                <Upload
                    batch={false} // currenly server does not support it
                    multiple={true}
                    restrictions={restrictions}
                    defaultFiles={[
                        {
                            name: 'Initial file',
                            status: UploadFileStatus.Initial,
                            progress: 0,
                            uid: '324-324-324-32-432-4-32-432432-32',
                            size: 500,
                            extension: '.jpg'
                        }
                    ]}
                    saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                    removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
                    withCredentials={false} // enable only for CORS
                />
                <div tabIndex={0} style={{border: '1px solid rgba(0, 0, 0, 0.08)', margin: 10}}>Next Component</div>
            </div>
        );
    }
}

export default UploadDemo;
