import { NewsItem } from "./NewsItem/NewsItem";
import { useEffect, useState } from "react";

const initNews = [
  {
    title: 'Первая новость',
    url: 'www.example.com',
    username: 'Пользователь1',
    date: '10.10.10',
    score: 10,
    id: '1'
  },
  {
    title: 'Вторая новость',
    url: 'www.example.com',
    username: 'Пользователь2',
    date: '10.10.10',
    score: 100,
    id: '2'
  },
  {
    title: 'Третяя новость',
    url: 'www.example.com',
    username: 'Пользователь3',
    date: '10.10.23',
    score: 1,
    id: '3'
  }
]

const newNews = {
  title: 'Четвертая новость',
  url: 'www.example.com',
  username: 'Пользователь3',
  date: '10.10.23',
  score: 1,
  id: '4'
}

function App() {
  const checkStorage = () => JSON.parse(window.localStorage.getItem('newsKey')) || initNews
  const [news, setNews] = useState(checkStorage)

  useEffect(() => {
    window.localStorage.setItem('newsKey', JSON.stringify(news))
  }, [news])

  const newsCountHandler = () => {
    setNews((prevState) => [...prevState, newNews]);
  }

  return (
    <>
      <div>Количество новостей: {news.length}</div>
      <button onClick={newsCountHandler}>Добавить новость</button>
      {
        news.map(item => {
          return <NewsItem key={item.id}
            title={item.title}
            url={item.url}
            username={item.username}
            date={item.date}
            score={item.score}
          />
        })
      }
    </>
  );
}

export default App;
