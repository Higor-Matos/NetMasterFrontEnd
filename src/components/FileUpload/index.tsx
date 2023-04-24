import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps, message } from "antd";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const { Dragger } = Upload;

const FileUpload: React.FC = () => {
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const hoverBorderColor = useColorModeValue("gray.500", "gray.400");

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
      <Dragger
        {...props}
        style={{
          flexGrow: 1,
          height: "100%",
          background: bgColor,
          borderColor: borderColor,
          transition: "border-color 0.2s",
          "&:hover": {
            borderColor: hoverBorderColor,
          },
        }}
      >
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
    </Flex>
  );
};

export default FileUpload;
