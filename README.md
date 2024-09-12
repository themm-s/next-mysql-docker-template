# Разбор кода

## В папке ```/src``` находится **server.ts** он взят с документации **[NextJS](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)**

## В папке ```/pages``` находится **index.tsx** это **SSR компонент** потому что внутри есть функция 
```ts
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
```

### Именно зарезервированная функция ``` getServerSideProps ``` дает понять что компонент является SSR

## В папке ```/pages/api``` находится **mysql.ts** это компонент откуда начинается подключение к MySQL

## Так же в папке есть путь ```/mysql/get.tsx``` это обработка API к которому можно обратиться с помощью fetch

- ---

## В папке ```/pages/testmysql``` находится **index.tsx** и это как раз тот компонент который делает запрос через API ```/api/mysql/get```

# Конец, спасибо за внимание <3