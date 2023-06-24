import axios from "axios";
import { useLocalStorage } from  '../hooks/LocalStorage';

export const prefix = "tim4";
const useClient = () => {
  const [creds] = useLocalStorage("credential");
  const client = axios.create({
    baseURL: `https://msib-feb3-objectstorage.productzillaacademy.com/collections`,
    headers: {
      Authorization: `Bearer ${creds}`,
    },
  });
  return client;
};
export default useClient;