export default function Section({ children, title }) {
  return (
    <section className="max-w-md mx-auto px-4">
      <div className="rounded-md p-4 bg-base-300">
        <h1 className="text-center text-xl">{title}</h1>
        <div>{children}</div>
      </div>
    </section>
  );
}
