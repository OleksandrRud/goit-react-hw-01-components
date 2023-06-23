import css from '../components/Statistics.module.css';
function Statistics({ data }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className={css.list}>
        {data.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
