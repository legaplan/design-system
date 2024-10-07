import Text from "../Text";

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  if (!message) return null;
  return <Text color="error">{message}</Text>;
};

export default Error;
