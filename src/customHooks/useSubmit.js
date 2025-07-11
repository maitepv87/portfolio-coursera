import { useState } from "react";

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setIsLoading(true);
    setResponse(null);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const success = Math.random() > 0.5;

    const result = success
      ? {
          type: "success",
          message: `Thanks for your message, ${data.firstName}!`,
        }
      : { type: "error", message: "Oops! Something went wrong." };

    setResponse(result);
    setIsLoading(false);
    return result;
  };

  return {
    submit,
    isLoading,
    response,
    setResponse, 
  };
};
