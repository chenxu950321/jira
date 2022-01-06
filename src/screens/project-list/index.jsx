import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce } from "utils";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
  const [params, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(params, 2000);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} params={params} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
