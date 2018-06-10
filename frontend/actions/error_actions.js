export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_UPLOAD_ERRORS = "CLEAR_UPLOAD_ERRORS";


export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const clearUploadErrors = () => ({
  type: CLEAR_UPLOAD_ERRORS
});