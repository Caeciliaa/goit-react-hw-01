import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  const containerClsx = clsx(
    css.container,
    isOnline ? css.isOnline : css.isOffline
  );

  return (
    <div className={containerClsx}>
      <img className={css.avatarImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.avatarTitle}>{name}</p>
      <p className={css.avatarStatus}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
