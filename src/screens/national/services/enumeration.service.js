import axiosInstance from "../../../utils/axios";

class EnumerationService {
  getSubmissions = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/data?pageNumber=${pageNumber}&pageSize=20`
      );
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getActiveStates = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/activestates?pageNumber=${pageNumber}&pageSize=20`
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getEnumerators = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/enumerators?pageNumber=${pageNumber}&pageSize=20`
      );
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getEnumerationWidgetAnalytics = async () => {
    try {
      const res = await axiosInstance.get("/enumeration/analytics/widgetdata");
      //console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getLoginCredentials = async (pageNumber) => {
    try {
      const res = await axiosInstance.get(
        `/enumeration/enumerators-credentials?pageNumber=${pageNumber}&pageSize=20`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
}

export default new EnumerationService();
