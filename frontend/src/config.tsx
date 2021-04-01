import '../styles.css';

import { useEffect } from 'react';

import { AuthProvider, useAuth } from './auth';

const twitch = window?.Twitch?.ext;

function Config({ live }: ConfigProps) {
  const { isLoading } = useAuth();

  useEffect(() => {
    if (twitch && live) {
      twitch.listen('broadcast', (target, contentType, body) => {
        twitch.rig.log(
          `New PubSub message!\n${target}\n${contentType}\n${body}`
        );
        // now that you've got a listener, do something with the result...
        // do something...
      });
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
    <div>
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
