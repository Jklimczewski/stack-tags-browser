import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { TagContainer } from "../components/TagContainer";
import { CustomSelect } from "../components/CustomSelect";
import { Pagination } from "../components/Pagination";
import { NoContent } from "../components/NoContent";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { ReadTags, SelectOption } from "../types";
import { CustomInput } from "../components/CustomInput";

function Home() {
  const [params, setParams] = useSearchParams();

  const { data, error, isLoading, setQueryParams } = useFetch();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const [page, setPage] = useState(1);
  const [pagesize, setPageSize] = useState(30);
  const [sorting, setSorting] = useState("");

  useEffect(() => {
    const currPage = parseInt(params.get("page") || "1");
    const currPageSize = parseInt(params.get("pagesize") || "30");
    const currSort = params.get("sort") || "popular";
    const currOrder = params.get("order") || "desc";

    setPage(currPage);
    setPageSize(currPageSize);
    setSorting(`${currSort}_${currOrder}`);
    setQueryParams({
      page: currPage,
      pagesize: currPageSize,
      order: currOrder,
      sort: currSort,
    });
  }, [params]);

  useEffect(() => {
    if (data) {
      setIsLast(false);
    } else {
      setIsLast(true);
    }
  }, [data]);

  useEffect(() => {
    if (page == 1) {
      setIsFirst(true);
    } else {
      setIsFirst(false);
    }
  }, [page]);

  const changePage = (value: number) => {
    const currentParams = Object.fromEntries(params.entries());
    const newParams = { page: (page + value).toString() };
    setParams({ ...currentParams, ...newParams });
  };

  const changeSorting = (value: string) => {
    const words = value.split("_");

    const newParams = { sort: words[0], order: words[1] };
    const currentParams = Object.fromEntries(params.entries());
    setParams({ ...currentParams, ...newParams });
  };

  const changePageSize = (value: string) => {
    if (parseInt(value) > 100) {
      value = "100";
    }
    setPageSize(parseInt(value));

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      const newParams = { pagesize: value };
      const currentParams = Object.fromEntries(params.entries());
      setParams({ ...currentParams, ...newParams });
    }, 1000);

    setTimer(newTimer);
  };

  const fetchedTags = data?.map((tag: ReadTags) => (
    <TagContainer key={tag.id} tag={tag} />
  ));

  const content = isLoading ? (
    <Loading />
  ) : error ? (
    <Error children={error.message} />
  ) : data?.length === 0 ? (
    <NoContent />
  ) : (
    fetchedTags
  );

  const optionsToSelect: SelectOption[] = [
    { value: "popular_desc", label: "Ilość malejąco" },
    { value: "popular_asc", label: "Ilość rosnąco" },
    { value: "name_asc", label: "Nazwa A-Z" },
    { value: "name_desc", label: "Nazwa Z-A" },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-20">
      <div className="flex flex-row space-x-8 pb-5">
        <div>
          <span className="pr-2">Sortuj:</span>
          <CustomSelect
            value={sorting}
            options={optionsToSelect}
            customOnChange={changeSorting}
          />
        </div>
        <div>
          <span className="pr-2">Ilość wyników na stronie:</span>
          <CustomInput
            type="number"
            value={pagesize}
            min={0}
            max={100}
            customOnChange={changePageSize}
          />
        </div>
      </div>

      <div className="w-1/3 flex flex-col border-2 border-base-300 p-5">
        <h1 className="self-center text-xl font-bold">Wyszukane tagi</h1>
        <div className="flex flex-row justify-between">
          <span className="font-light">Nazwa tagu</span>
          <span className="font-light">Ilość</span>
        </div>
        {content}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          page={page}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}

export default Home;
