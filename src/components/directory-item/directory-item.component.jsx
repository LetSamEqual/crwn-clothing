import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const path = `/shop/${title}`

  return (
        <Link className='directory-item-container' to={path}>
          <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className='body'>
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </Link>
      );
};

export default DirectoryItem;
