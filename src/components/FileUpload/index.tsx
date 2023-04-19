import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps, message } from "antd";
import { Flex, Text, Box, VStack, useColorModeValue } from "@chakra-ui/react";

const { Dragger } = Upload;

const FileUpload: React.FC = () => {
  const [lastUploadedFile, setLastUploadedFile] = useState("");

  const textColor = useColorModeValue("black", "white");

  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setLastUploadedFile(info.file.name);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Flex height="100%" direction="column">
      <Dragger {...props} style={{ flexGrow: 1, height: "100%" }}>
        <p className="ant-upload-drag-icon" style={{ color: textColor }}>
          <InboxOutlined />
        </p>
        <Text as="p" className="ant-upload-text" style={{ color: textColor }}>
          Click or drag file to this area to upload
        </Text>
        <Text as="p" className="ant-upload-hint" style={{ color: textColor }}>
          PNG, JPG, PDF, and ZIP files are allowed.
        </Text>
      </Dragger>
      {lastUploadedFile && (
        <Box mt={2}>
          <Text fontSize="sm" style={{ color: textColor }}>
            Last uploaded file: <span style={{ color: textColor }}>{lastUploadedFile}</span>
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default FileUpload;
