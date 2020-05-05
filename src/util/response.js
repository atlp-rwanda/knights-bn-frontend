import { toast } from 'react-toastify';

async function handleResponse(response) {
  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem('token', data.user.token);
    toast.success(`Welcome back ${data.user.username}`);
    return data;
  }
  if (response.status === 400) {
    const error = await response.text();
    return error;
  }
  if (response.status === 401) {
    const error = await response.json();
    toast.error(error.message);
    return error;
  }
  if (response.status === 404) {
    const error = await response.text();
    toast.info("You don't have an account yet. Please sign up");
    return error;
  }
  return 'Network response was not ok.';
}

export default handleResponse;
