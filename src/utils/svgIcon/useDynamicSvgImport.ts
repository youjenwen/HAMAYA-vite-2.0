import React, { useEffect, useRef, useState } from 'react';

//參考: https://dev.to/mondal10/dynamic-svg-component-in-vite-react-ts-3pih

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setIsLoading(true);

    const importSvgIcon = async (): Promise<void> => {
      try {
        //svg icons are placed in the same directory
        //被提醒不要把svg放在public: Assets in public cannot be imported from JavaScript. Instead of /public/images/footer-music.svg, put the file in the src directory, and use /src/images/footer-music.svg instead
        importedIconRef.current = (
          await import(`../../stories/assets/${iconName}.svg`)
        ).ReactComponent;
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, isLoading, SvgIcon: importedIconRef.current };
}
