import Link from 'next/link';
import connection from './api/mysql';

// SSR Компонент потому что тут есть getServerSideProps И рендериться все на стороне сервера и готова отдается клиенту

const HomePage = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <Link href="/testmysql">TESTING MYSQL</Link>
      <h1>Dynamic Data from MySQL</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.id} - {item.username} color: {item.color}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const [rows] = await connection.query('SELECT * FROM test_borya.users;');
  if (!Array.isArray(rows)) return { props: { data: [] } };

  return {
    props: {
      data: rows.map((row: any) => ({
        ...row
      })),
    },
  };
}

export default HomePage;