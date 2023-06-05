import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";

const { Dragger } = Upload;

const FileUpload: React.FC = () => {
  const textColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const hoverBorderColor = useColorModeValue("gray.500", "gray.400");

  const props = {
    name: "file",
    multiple: false,
    action: "http://localhost:5018/upload/file",
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`Arquivo ${info.file.name} enviado com sucesso.`);
      } else if (status === "error") {
        message.error(`Falha ao enviar o arquivo ${info.file.name}.`);
      }
    },
  };

  return (
    <Box
      p={4}
      bg={bgColor}
      borderRadius="md"
      textAlign="center"
      borderColor={borderColor}
      borderWidth={1}
      color={textColor}
      _hover={{ borderColor: hoverBorderColor }}
      transition="border-color 0.2s"
    >
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ fontSize: "48px", color: "#8B5CF6" }} />
        </p>
        <p className="ant-upload-text">
          Clique ou arraste o arquivo para fazer o upload
        </p>
        <p className="ant-upload-hint">
          Arquivos PNG, JPG, PDF e ZIP são permitidos.
        </p>
      </Dragger>
    </Box>
  );
};

export default FileUpload;
