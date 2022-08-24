import React, { useEffect, useState } from 'react';
import { MainComponent } from '../../components/main';
import { request } from '../../services';

const MainContainer: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    void (async () => {
      const r = await request({ url: 'http://httpbin.org/json' });
      const j = await r.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setData(j);
    })();
  }, []);

  return <MainComponent data={data} />;
};

export { MainContainer };
