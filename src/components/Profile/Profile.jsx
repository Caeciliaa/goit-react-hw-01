import css from './Profile.module.css';

export default function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileText}> @{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileItem}>
        <li className={css.profileList}>
          <span className={css.profileSpanText}>Followers</span>
          <span className={css.profileSpanNumber}>{followers}</span>
        </li>
        <li className={css.profileList}>
          <span className={css.profileSpanText}>Views</span>
          <span className={css.profileSpanNumber}>{views}</span>
        </li>
        <li className={css.profileList}>
          <span className={css.profileSpanText}>Likes</span>
          <span className={css.profileSpanNumber}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
