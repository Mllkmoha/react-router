import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

const Links = (props) => (
  <li>
    <NavLink
      to={props.to}
      end={props.end}
      className={({ isActive }) => (isActive ? classes.active : undefined)}
    >
      {props.children}
    </NavLink>
  </li>
);

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <Links to="/events" end>
            Events
          </Links>
          <Links to="/events/new" >
            New Event
          </Links>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
