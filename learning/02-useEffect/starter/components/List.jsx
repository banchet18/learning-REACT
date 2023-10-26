const List = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <li>
      <img src={avatar_url} alt="" />
      <div>
        <h4>{login}</h4>
        <a href={html_url}>profile</a>
      </div>
    </li>
  );
};
export default List;
