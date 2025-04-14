import { Alert } from '@mui/material';

const ErrorAlert = ({ message }: { message: string }) => {
  return <Alert severity="error" sx={{ mt: 2 }}>{message}</Alert>;
}

export default ErrorAlert;