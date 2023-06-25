import css from '../components/Statistics.module.css';
function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
// function randomColor(e) {
//   css.item.style = 'background-color:e';
// }
// const color = Math.floor(Math.random() * 16777215).toString(16);
export default Statistics;
