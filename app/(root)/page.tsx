import TradingViewWidget from "@/components/TradingViewWidget"
import { MARKET_DATA_WIDGET_CONFIG } from "@/lib/constants"

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`

  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 grid-cols-1 md:grid-cols-2 home-section">
        <div className="w-full">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
            className="custom-chart"
          />
        </div>
        <div className="w-full">
            <TradingViewWidget
              title="Stock Heatmap"
              scriptUrl={`${scriptUrl}stock-heatmap.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={600}
              className="custom-chart"
            />
        </div>
      </section>
      <div className="w-full md:col-span-1 xl:col-span-1">
            <TradingViewWidget
              scriptUrl={`${scriptUrl}market-quotes.js`}
              config={MARKET_DATA_WIDGET_CONFIG}
              height={600}
            />
        </div>
    </div>
  )
}

export default Home
