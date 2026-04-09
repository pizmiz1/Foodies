import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Time to get started!</h1>
      <Link href="meals/example-1">Example 1</Link>
    </main>
  );
};

export default Home;
