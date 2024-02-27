import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import { Search as SearchIcon } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";

import * as S from "./style";
import Cover from "../../components/Cover";
import CoverPlaceholder from "../../components/Cover/placeholder";
import useDebounce from "../../hooks/useDebounce";
import { useShowQuery } from "../../store/api";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const debouncedQuery = useDebounce(query);
  const { data, isFetching } = useShowQuery(debouncedQuery);

  useEffect(() => {
    if (debouncedQuery !== searchParams.get("q")) {
      setSearchParams(!debouncedQuery ? {} : { q: debouncedQuery });
    }
  }, [searchParams, debouncedQuery, setSearchParams]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Paper
            component="form"
            sx={{ display: "flex", width: "100%" }}
            onSubmit={handleSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search shows"
              inputProps={{ "aria-label": "search shows" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      <Box p={2}>
        <S.Content>
          {isFetching
            ? Array.from({ length: 8 }).map((_, index) => (
                <CoverPlaceholder key={index} />
              ))
            : data?.map((show) => (
                <Link to={`/show/${show.id}`} key={show.id}>
                  <Cover
                    rating={show.rating}
                    name={show.name}
                    image={show.image}
                    genres={show.genres}
                  />
                </Link>
              ))}
        </S.Content>
      </Box>
    </>
  );
}
