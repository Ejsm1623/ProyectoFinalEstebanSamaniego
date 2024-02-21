import {} from 'react';
import { Link } from 'react-router-dom';

export default function ListNavigation () {
return (
    <div className='container-fluid justify-content-center d-flex'>
        <ul className="nav">
  <li className="nav-item">
  <Link to={"/category/T-Shirt"} className="nav-link" href="#">T-Shirts</Link>
  </li>
  <li className="nav-item">
    <Link to={"/category/Abrigo"} className="nav-link" href="#">Hoodies</Link>
  </li>
  <li className="nav-item">
    <Link to={"/category/Gorra"} className="nav-link" href="#">Gorras</Link>
  </li>
</ul>
    </div>
)
};