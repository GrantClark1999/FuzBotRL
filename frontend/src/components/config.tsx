import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from '../auth';

import './index.css';

const twitch = window?.Twitch?.ext;

function Config({ live }: ConfigProps) {
  const [theme, setTheme] = useState('light');

  const { isLoading } = useAuth();

  useEffect(() => {
    if (twitch) {
      twitch.onContext((context, delta) => {
        if (delta.includes('theme') && context.theme) setTheme(context.theme);
      });
      if (live) {
        twitch.listen('broadcast', (target, contentType, body) => {
          twitch.rig.log(
            `New PubSub message!\n${target}\n${contentType}\n${body}`
          );
          // now that you've got a listener, do something with the result...
          // do something...
        });
      }
    }
    return () => {
      if (twitch && live) {
        twitch.unlisten('broadcast', () =>
          console.log('successfully unlistened')
        );
      }
    };
  }, [live]);

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      {isLoading ? (
        <p>Loading...</p>
      ) : live ? (
        <p>
          <p>Hello world!</p>
          <p>This is the live config page! </p>
        </p>
      ) : (
        <p>There is no configuration needed for this extension!</p>
      )}
    </div>
  );
}

export default ({ live }: ConfigProps) => (
  <AuthProvider>
    <Config live={live} />
  </AuthProvider>
);

type ConfigProps = {
  live?: boolean;
};
