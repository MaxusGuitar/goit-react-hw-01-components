import PropTypes from "prop-types";


const Statistics = ({title, stats}) => {
  return (
    <section className="statistics">
   {title && <h2 className="title">Upload stats</h2>}
  <ul className="stat-list">
              {stats.map((a) => (
                  <li className="item" key={a.id}> 
      <span className="label">{a.label} </span>
      <span className="percentage">{a.percentage}</span>
    </li>))}
  </ul>
</section>
  );
}
// ---------------------для описания типов---------------------- 
Statistics.propTypes = {
   title: PropTypes.string,
  stats: PropTypes.array,
}

export default Statistics