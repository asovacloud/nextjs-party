import Link from "next/link";

import Layout from "../components/Layout";
import ModalBox from "../components/ModalBox";
import Todos from "../components/Todos";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example Start">
    <div className="container">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ModalBox />
      <Todos />
    </div>
  </Layout>
);

export default IndexPage;
