import '../styles.css';

import RLItem from 'components/RLItem';
import { useEffect, useState } from 'react';

import { AuthProvider, useAuth } from './auth';

const twitch = window?.Twitch?.ext;

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const { isLoading } = useAuth();

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
      return () => {
        twitch.unlisten('broadcast', () =>
          console.log('successfully unlistened')
        );
      };
    }
  }, [twitch]);

  if (isLoading || !isVisible) return <div className="App"></div>;

  return (
    <div className="flex">
      <RLItem />
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
