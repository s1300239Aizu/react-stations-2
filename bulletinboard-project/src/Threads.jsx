import React, {useState, useEffect} from 'react';

export const Threads = () =>  {
    const [threads, setThreads] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      fetchThreads();
    }, [offset]);

    const fetchThreads = () => {
      fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`)
      .then(response => response.json())
      .then(data => setThreads(data.slice(0, 7)))
      .catch(error => console.error('Error fetching threads:', error));
    };

    const handleUpdateThreads = () => {
      const randomOffset = Math.floor(Math.random() * 991); // 0から990までのランダムな数値を生成
      setOffset(randomOffset);
    };

    return (
      <>
        <main>
          <div className="main-title">新着スレッド</div>
          {threads.map(thread => (
            <div key={thread.id} className = "thread">
                {thread.title}
            </div>
          ))}
          <div className="update-button-div">
            <button className='update-button' onClick={handleUpdateThreads}>更新</button>
          </div>
        </main>
      </>
    )
}
  
export default Threads
  