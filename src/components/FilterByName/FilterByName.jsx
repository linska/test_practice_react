export const FilterByName = ({users, handleNameFilter}) => {
  return (
    <div className="filter_by_name">
      <button onClick={() => handleNameFilter(null)}>All</button>
      {users.map((user) => (
        <button key={user.id} onClick={() => handleNameFilter(user.id)}>{user.name}</button>
      ))}
    </div>
  )
}