import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>Popular</span>
        </li>
      </ul>
      <span>Topic</span>
      <ul>
        <li>
          <svg
            rpl=""
            fill="currentColor"
            height="20"
            icon-name="topic-videogaming-outline"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.929 14.17 18.277 6.6a4.631 4.631 0 0 0-4.52-3.6H5.702a4.623 4.623 0 0 0-4.58 3.908L.034 14.387a3.134 3.134 0 0 0 .735 2.5 3.227 3.227 0 0 0 5.553-1.284l.39-1.635h5.794l.39 1.635A3.2 3.2 0 0 0 16.01 18h.782a3.211 3.211 0 0 0 3.123-2.444c.109-.455.114-.929.015-1.386Zm-1.6 1.85a1.964 1.964 0 0 1-1.54.73h-.781a1.947 1.947 0 0 1-1.9-1.453l-.63-2.476H5.74L5.11 15.3a1.947 1.947 0 0 1-1.9 1.453 1.974 1.974 0 0 1-1.5-.678 1.862 1.862 0 0 1-.443-1.506l1.09-7.481A3.366 3.366 0 0 1 5.7 4.25h8.062a3.373 3.373 0 0 1 3.3 2.614l1.65 7.573a1.877 1.877 0 0 1-.383 1.583h-.001Z"></path>
            <path d="M6.256 6.212h-1.25v1.776h-1.73v1.25h1.73v1.622h1.25V9.238h1.73v-1.25h-1.73V6.212Z"></path>
            <path d="M11.82 8.81a1 1 0 1 0 1.71.71 1.001 1.001 0 0 0-.3-.71 1.034 1.034 0 0 0-1.41 0Z"></path>
            <path d="M15.23 6.85a.875.875 0 0 0-.32-.22c-.246-.1-.522-.1-.77 0a.875.875 0 0 0-.32.22.975.975 0 0 0 0 1.41 1 1 0 0 0 1.41 0 1.03 1.03 0 0 0 .22-1.09.877.877 0 0 0-.22-.32Z"></path>
          </svg>
          <span> Gaming</span>
          <svg
            rpl=""
            fill="currentColor"
            height="20"
            icon-name="caret-down-outline"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
          </svg>
        </li>
        <li>Sports</li>
        <li>Business</li>
        <li>Crypto</li>
        <li>Television</li>
        <li>Celebrity</li>
      </ul>
      <span>See more</span>
      <span>Resources</span>
      <ul>
        <li>About Reddit</li>
        <li>Advertise</li>
        <li>Help</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Press</li>
      </ul>
      <span>See more</span>
      <br />
      <span className={styles.rights}>
        Reddit, Inc. © 2023. All rights reserved.
      </span>
    </div>
  );
};

export default SideBar;
