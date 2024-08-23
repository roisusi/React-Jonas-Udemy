import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) {
    return null;
  }
  return (
    <div className={'hidden font-semibold md:block md:text-sm'}>{username}</div>
  );
}

export default Username;
