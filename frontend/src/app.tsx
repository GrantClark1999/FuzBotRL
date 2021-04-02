import 'styles';

import RLItem from 'components/RLItem';
import { useEffect, useState } from 'react';

import { AuthProvider, useAuth } from './auth';

const twitch = window?.Twitch?.ext;

const stubItem: Item = {
  name: 'Blade Wave',
  src:
    'https://rocket-league.com/content/media/items/avatar/220px/114e6787451585165521.png',
  rarity: 'LIMITED',
  paint: 'TITANIUM_WHITE',
  edition: 'INVERTED',
};

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
    <div className="flex justify-around pt-4 w-full">
      <RLItem item={stubItem} team="blue" />
      <RLItem item={stubItem} team="orange" />
    </div>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
