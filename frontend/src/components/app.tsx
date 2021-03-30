import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from '../auth';

import './index.css';

const twitch = window?.Twitch?.ext;

function App() {
  const [theme, setTheme] = useState('light');
  const [isVisible, setIsVisible] = useState(true);

  const {
    hasSharedId,
    isLoading,
    isModerator,
    token,
    opaqueId,
    userId,
  } = useAuth();

  console.log('loaded');

  useEffect(() => {
    if (twitch) {
      twitch.listen('broadcast', (target, contentType, body) => {
        twitch.rig.log(
          `New PubSub message!\n${target}\n${contentType}\n${body}`
        );
      });
      twitch.onVisibilityChanged((vis, _c) => {
        setIsVisible(vis);
      });

      twitch.onContext((context, delta) => {
        if (delta.includes('theme') && context.theme) setTheme(context.theme);
      });
    }
    return () => {
      if (twitch) {
        twitch.unlisten('broadcast', () =>
          console.log('successfully unlistened')
        );
      }
    };
  }, []);

  if (isLoading || !isVisible) return <div className="App"></div>;

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <p>Hello world!</p>
      <p>My token is: {token}</p>
      <p>My opaque ID is {opaqueId}.</p>
      <div>
        {isModerator ? (
          <p>
            I am currently a mod, and here's a special mod button{' '}
            <input value="mod button" type="button" />
          </p>
        ) : (
          'I am currently not a mod.'
        )}
      </div>
      <p>
        I have{' '}
        {hasSharedId
          ? `shared my ID, and my user_id is ${userId}`
          : 'not shared my ID'}
        .
      </p>
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
