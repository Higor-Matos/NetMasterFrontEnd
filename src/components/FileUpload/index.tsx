import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps, message } from "antd";
import { Flex } from "@chakra-ui/react";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const FileUpload: React.FC = () => (
  <Flex height="100%" direction="column">
    <Dragger {...props} style={{ flexGrow: 1 }}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
                Support all file types, send only a single file at a time.
                
      </p>
    </Dragger>
  </Flex>
);

export default FileUpload;
