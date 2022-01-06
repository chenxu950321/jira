export interface User {
  id:string;
  name:string;
  email:string;
  title:string;
  organization:string;
}

interface SearchPanelProps {
    users: User[],
    params: {
      name:string;
      personId:string;
    },
    setParam:(params:SearchPanelProps['params']) => void;
}

export const SearchPanel = ({ params, users, setParam } : SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={params.name}
        onChange={(evt) =>
          setParam({
            ...params,
            name: evt.target.value,
          })
        }
      />
      <select
        value={params.personId}
        onChange={(evt) => {
          setParam({
            ...params,
            personId: evt.target.value,
          });
        }}
      >
        <option value={""}>负责人</option>
        {users.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};
