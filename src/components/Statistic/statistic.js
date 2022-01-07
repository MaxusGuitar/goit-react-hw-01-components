import PropTypes from "prop-types";
import style from "./statistic.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}
      <ul className={style.stat__list}>
        {stats.map((a) => (
          <li className={style.item} key={a.id}>
            <span className={style.label}>{a.label} </span>
            <span className={style.percentage}>{a.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
// ---------------------для описания типов----------------------
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
