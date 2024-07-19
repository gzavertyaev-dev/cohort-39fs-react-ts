import { useState, ChangeEvent, createContext } from "react";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";

import { BlogManagementWrapper, TextArea } from "./styles";

export const BlogManagementContext = createContext<string>("");

function BlogManagement() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeTextAreaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const postMessage = () => {
    setMessage(textAreaValue);
  };

  return (
    <BlogManagementContext.Provider value={message}>
      <BlogManagementWrapper>
        <TextArea
          name="message"
          value={textAreaValue}
          onChange={onChangeTextAreaMessage}
          placeholder="Enter message to post"
        />
        <Button name="Запостить" onClick={postMessage} />
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
