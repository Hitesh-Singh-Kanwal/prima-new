export default function WhoWeWorkWith() {
  return (
    <section aria-labelledby="who-heading">
      <h2 id="who-heading" className="section-label">
        Who we work with
      </h2>

      <div className="who-grid">
        <div className="who-item">
          <div className="who-name">AI infrastructure providers</div>
          <p>
            Efficiency is margin. PrimaLabs turns your compute into a differentiated offering
            — <strong>more AI capacity per dollar of cloud spend,</strong> with no additional
            CapEx.
          </p>
        </div>
        <div className="who-item">
          <div className="who-name">Enterprise AI teams</div>
          <p>
            Running 100+ GPUs across multiple models. PrimaLabs acts as{" "}
            <strong>an always-on AI performance engineer</strong> — so your team focuses on
            what only humans can do.
          </p>
        </div>
      </div>
    </section>
  );
}
