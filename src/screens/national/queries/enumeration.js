import { useQuery } from "@tanstack/react-query";
import enumerationService from "../services/enumeration.service";

export const useGetEnumerationData = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["enumerationData", pageNumber],
    queryFn: () => enumerationService.getSubmissions(pageNumber),
    enabled: !!pageNumber,
  });
  return { data, isLoading, error };
};

export const useGetActiveStates = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["activeStates", pageNumber],
    queryFn: () => enumerationService.getActiveStates(pageNumber),
    enabled: !!pageNumber,
  });
  return { activeStates: data, isLoading, error };
};

export const useGetAllEnumerators = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allEnumerators", pageNumber],
    queryFn: () => enumerationService.getEnumerators(pageNumber),
  });
  return { enumerators: data, isLoading, error };
};

export const useGetEnumerationWidgetData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["enumerationWidgetData"],
    queryFn: enumerationService.getEnumerationWidgetAnalytics,
  });
  return { widgetdata: data, isLoading, error };
};
export const useGetLoginCredentials = ({ pageNumber }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["loginCredentials", pageNumber],
    queryFn: () => enumerationService.getLoginCredentials(pageNumber),
  });
  return { credentials: data, isLoading, error };
};
