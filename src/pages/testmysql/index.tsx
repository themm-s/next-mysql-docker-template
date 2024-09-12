import { useState } from "react";

// Тут уже в виде запроса

export default function TestMysql() {
  const [user, setUser] = useState([]);

  const sendRequest = async () => {
    await fetch('/api/mysql/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        username: 'Themms'
      })
    })
      .then(res => res.json())
      .then(data => setUser(data));
  };
  return (
    <>
      <section>
        <h2>Тестовые данные: Найти пользователя у кого id == 1 и username == Themms</h2>
        <button onClick={sendRequest}>Send request</button>
        <br />
        Полученные пользователи:
        {user && user.map((item: any) => <p key={item.id}>{item.id} - {item.username} - {item.color}</p>)}
      </section>
    </>
  );
}