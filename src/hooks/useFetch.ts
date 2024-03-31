import { useCallback, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FilterQueryParams } from "../types";

function useFetch() {
  const [queryParams, setQueryParams] = useState<FilterQueryParams>({
    page: 1,
    pagesize: 30,
    sort: "popular",
    order: "desc",
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["tags", queryParams],
    queryFn: useCallback(async () => {
      const queryData = new URLSearchParams();

      queryData.append("site", "stackoverflow");
      queryData.append("page", queryParams.page.toString());
      queryData.append("pagesize", queryParams.pagesize.toString());
      queryData.append("sort", queryParams.sort);
      queryData.append("order", queryParams.order);

      return await axios
        .get("https://api.stackexchange.com/2.3/tags", { params: queryData })
        .then((res) => res.data.items);
    }, [queryParams]),
    enabled: !!queryParams,
  });

  return { data, error, isLoading, setQueryParams };
}

export { useFetch };
