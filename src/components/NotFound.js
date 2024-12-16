import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found!</p>
      <NavLink to='/'>Go back to the main page</NavLink>
    </div>
  );
}
