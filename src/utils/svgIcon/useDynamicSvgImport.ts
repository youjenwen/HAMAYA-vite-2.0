import React, { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setIsLoading(true);

    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`../../../public/images/${iconName}.svg`)
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
