import Link from 'next/link';
import Meta from '../../components/Meta';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await res.json();

  return {
    props: {
      ninjas,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Meta title="Ninja List | Ninjas" />
      <h1>All Ninjas</h1>

      {ninjas.map(ninja => (
        <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const ninjas = await res.json();

//   return {
//     props: {
//       ninjas,
//     },
//   };
// };

export default Ninjas;
