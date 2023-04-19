import { useEffect } from 'react';

type ImportScriptProps = {
    resourceUrl: string;
  }

const ImportScript = (resourceUrl: any) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};

export default ImportScript