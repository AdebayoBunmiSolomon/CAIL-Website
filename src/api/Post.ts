import { useState } from "react";
import axios from "axios";

export const PostRequest = async (url: string, payload: any, headers: any) => {
  let loading: boolean = true;

  try {
    loading = true;
    const { data, status } = await axios.post(url, payload, headers);
    loading = false;
    return { status, data, loading };
  } catch (error: any) {
    loading = true;
    const status = error?.response?.status || error?.request?.status || 500;
    console.error("Error:", error.message);
    return { status, data: null, loading };
  } finally {
    loading = true;
    return { loading };
  }
};
