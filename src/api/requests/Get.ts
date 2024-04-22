import axios from "axios";

export const GetRequest = async (url: string, headers?: any, payload?: any) => {
  let loading = true;
  try {
    // Set loading to true before making the request
    const res = await axios.get(url, {
      headers,
      params: { payload },
    });
    const { status, data } = res;
    // Set loading to false after the request completes successfully
    loading = false;
    return { status, data, loading };
  } catch (err: any) {
    // Set loading to false if there's an error
    loading = false;

    if (axios.isCancel(err)) {
      console.log("Request was canceled due to timeout");
    } else {
      console.error("Error fetching data:", err);
    }
    return {
      status: err.response.status || err.request.status || 500,
      loading,
    };
  }
};
