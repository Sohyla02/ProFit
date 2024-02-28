import { useLocation } from "react-router-dom";

export function useGetPageData() {
  const { pathname } = useLocation();
  // Splitting the URL into an
  let pathNames = pathname.split("/").filter((x) => x);
  pathNames = pathNames.map((x) => x.split("-").join(" "));
  return pathNames;
}
