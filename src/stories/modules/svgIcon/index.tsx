import { useDynamicSvgImport } from '@/utils/svgIcon/useDynamicSvgImport';
import React from 'react';

interface IProps {
  iconName: string;
  wrapperStyle?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
  const { iconName, wrapperStyle, svgProp } = props;
  const { isLoading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {isLoading && <div className="h-8 w-8 animate-pulse rounded-full bg-slate-400"></div>}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
}
export default SvgIcon;
