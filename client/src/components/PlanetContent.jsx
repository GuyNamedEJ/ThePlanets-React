function PlanetContent({ planetName, content, source }) {
  return (
    <section className="content-container">
      <h2 className="antonio">{planetName}</h2>
      <p className="content-text spartan">{content}</p>

      <div className="source spartan">
        <p>
          Source: <a href={source}>Wikipedia</a>
        </p>
        <img src="/assets/icon-source.svg" alt="" />
      </div>
    </section>
  );
}
export default PlanetContent;
