'use client';


import useTradingViewWidget from '@/app/hooks/UseTradingViewWidget';
import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
    title?: string;
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}

const TradingViewWidget = ({ title, scriptUrl, config, height = 600, className }: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
        { title && <h3 className="font-semibold text-2xl text-gray-1090 mb-5">{title}</h3>}
        <div className={className ? `tradingview-widget-container ${className}` : "tradingview-widget-container"} ref={containerRef}>
            <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }}/>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
