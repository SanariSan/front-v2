import React, { useEffect, useState } from 'react';
import { MainComponent } from '../../components/main';
import { request } from '../../services';

const MainContainer: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      // @ts-expect-error temp call for showcase, not typed
      const r = await request({ url: 'http://httpbin.org/json' });
      const j = await r.json();
      await setData(j);
    })();
  }, []);

  return <MainComponent data={data} />;
};

export { MainContainer };
