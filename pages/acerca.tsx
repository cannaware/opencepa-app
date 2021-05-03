import { NextPage } from 'next';
import Link from 'next/link';

const AcercaPage: NextPage = () => {
  return (
    <main>
      <h1>Info NextJS</h1>
      <p>
        <Link href="/">
          <a>Volver al Inicio</a>
        </Link>
      </p>
    </main>
  );
};

export default AcercaPage;