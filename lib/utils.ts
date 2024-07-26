export const validateString = (value: unknown, maxLengh: number) => {
  if (
    typeof value !== "string" ||
    value.trim() === "" ||
    value.length > maxLengh
  ) {
    return false;
  }
  return true;
};





export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An unknown error occurred";
  }

  return message;
};
