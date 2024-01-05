import { axiosClient } from "../constants/Api";

export const fetchMapShopLocation = async (page = 0) => {
  try {
    const res = await axiosClient.get(`?page=${page}`);

    if (!res.data) {
      throw new Error("Error during fetching");
    }
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};
