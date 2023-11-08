import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search?pokemon=${searchText}`);
  }

  return (
    <>
      <Head>
        <title>Pokefetch</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <header className='main-header'></header>
      <main className='main'>
        <div className='hero'>
          <div className='container'>
            <div className='hero-content'>
              <div className='hero-left'>
                <h1 className='hero-title'>Pokefetch</h1>

                <form
                  onSubmit={handleSubmit}
                  className='hero-form'
                >
                  <input
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.currentTarget.value)}
                  />
                  <button type='submit'>search</button>
                </form>
              </div>
              <div className='hero-right'>
                <img
                  src='/images/pokeball.png'
                  alt='Pokemon Pokeball'
                  className='hero-image'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='main-footer'>@praqo</footer>
    </>
  );
}
