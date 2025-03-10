import axiosInstance from "../../../utils/axios";

class EnumerationService {
  getSubmissions = async () => {
    try {
      const res = await axiosInstance.get("/enumeration/data");
      //   console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getActiveStates = async () => {
    try {
      const res = await axiosInstance.get("/enumeration/activestates");
      console.log(res.data);
      return res.data.result;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
  getEnumerators = async () => {
    try {
      const res = await axiosInstance.get("/enumeration/enumerators");
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
  getLoginCredentials = async () => {
    try {
      const res = await axiosInstance.get(
        "/enumeration/enumerators-credentials"
      );
      return res.data.result;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
}

export default new EnumerationService();
