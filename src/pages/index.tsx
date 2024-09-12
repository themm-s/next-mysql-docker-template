import Link from 'next/link';
import connection from './api/mysql';

// SSR Компонент потому что тут есть getServerSideProps И рендериться все на стороне сервера и готова отдается клиенту

const HomePage = ({ data }: { data: { id: number, username: string, color: string; }[]; }) => {
  console.log(data);
  return (
    <div>
      <Link href="/testmysql">TESTING MYSQL</Link>
      <h1>Dynamic Data from MySQL</h1>
      <ul>
        {data.map((item: { id: number, username: string, color: string; }) => (
          <li key={item.id}>{item.id} - {item.username} color: {item.color}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const [rows] = await connection.query('SELECT * FROM nextmysql.users;');
  if (!Array.isArray(rows)) return { props: { data: [] } };

  console.log(rows);

  return {
    props: {
      data: rows.map((row) => ({
        ...row
      })),
    },
  };
}

export default HomePage;