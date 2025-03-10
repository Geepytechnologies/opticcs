import { useQuery } from "@tanstack/react-query";
import enumerationService from "../services/enumeration.service";

export const useGetEnumerationData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["enumerationData"],
    queryFn: enumerationService.getSubmissions,
  });
  return { data, isLoading, error };
};

export const useGetActiveStates = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["activeStates"],
    queryFn: enumerationService.getActiveStates,
  });
  return { activeStates: data, isLoading, error };
};

export const useGetAllEnumerators = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allEnumerators"],
    queryFn: enumerationService.getEnumerators,
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
export const useGetLoginCredentials = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["loginCredentials"],
    queryFn: enumerationService.getLoginCredentials,
  });
  return { credentials: data, isLoading, error };
};
