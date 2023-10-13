import { useScrollTop } from "../hooks/useScrollTop";

function Main({ children }) {
  const ref = useScrollTop();
  return (
    <main
      ref={ref}
      className="overflow-y-auto px-3 py-4 sm:px-5 md:px-8 lg:px-10"
    >
      {children}
    </main>
  );
}

export default Main;
