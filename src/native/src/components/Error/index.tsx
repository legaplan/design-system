import BaseText from "../BaseText";

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  if (!message) return null;
  return <BaseText color="error">{message}</BaseText>;
};

export default Error;
