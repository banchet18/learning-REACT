const SocialLinks = ({ icon, className }) => {
  return (
    <li>
      <a href="https://www.twitter.com" target="_blank" className={className}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLinks;
