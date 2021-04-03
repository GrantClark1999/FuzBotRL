import 'styles';

import Nav from 'components/Nav';
import RLItem from 'components/RLItem';
import { useEffect, useState } from 'react';

import { AuthProvider, useAuth } from './auth';

const twitch = window?.Twitch?.ext;

const stubItem: Item = {
  name: 'Dimonix',
  src:
    'https://rocket-league.com/content/media/items/avatar/220px/dimonix3/dimonix-BurntSienna.png',
  rarity: 'LIMITED',
  paint: 'BURNT_SIENNA',
  edition: 'INVERTED',
};

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [tab, setTab] = useState('body');

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
    <div className="flex flex-col h-full">
      <Nav onChange={setTab} />
      <div className="flex flex-1 items-center justify-around">
        <RLItem item={stubItem} team="blue" />
        <RLItem item={stubItem} team="orange" />
      </div>
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
