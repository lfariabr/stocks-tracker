"use client";
import { useEffect, useRef } from "react"

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height: number) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded) return;
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="height: ${height}px; width: 100%;"></div>`;
    
    const script = document.createElement("script");  
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
}

export default useTradingViewWidget
