import cryptoData from "../data/cryptoMetrics.json";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiSolana, SiDogecoin } from "react-icons/si";
import Button from "../components/Button";
import Chart from "../components/Chart";

const iconComponents = {
  FaBitcoin,
  FaEthereum,
  SiSolana,
  SiDogecoin,
};

const colorMap = {
  yellow: { bg: "bg-yellow-400/20", text: "text-yellow-400" },
  purple: { bg: "bg-purple-400/20", text: "text-purple-400" },
  green: { bg: "bg-green-400/20", text: "text-green-400" },
  red: { bg: "bg-red-400/20", text: "text-red-400" },
};

const CryptoTable = () => {
  return (
    <div className="py-16 p-6 rounded-2xl text-white mt-10 shadow-lg">
      <div className="mx-auto text-center">
        <Button
          text={"Trade Crypto"}
          variant="badge"
          rounded="full"
          className="border-none bg-primary/10 text-primary/80 mb-8"
        />
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Crypto Market Trade And Metrics
        </h2>
      </div>

      <div className="space-y-2 max-w-5xl mx-auto">
        {cryptoData.map((crypto) => {
          const Icon = iconComponents[crypto.icon];
          const changePositive = crypto.price_change_percentage_24h >= 0;

          const sparklineData = crypto.sparkline.map((p, i) => ({
            pv: p,
            i,
          }));

          return (
            <div
              key={crypto.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between py-4 px-4 rounded-lg  hover:bg-[#1a1f35] md:bg-transparent bg-[#1a1f35] transition gap-4"
            >
              <div className="flex items-center gap-3 md:w-1/4">
                {Icon && (
                  <div
                    className={`rounded-full p-2 flex items-center justify-center ${
                      colorMap[crypto.iconColor]?.bg
                    }`}
                  >
                    <Icon
                      className={`text-2xl ${colorMap[crypto.iconColor]?.text}`}
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold">{crypto.name}</p>
                  <p className="text-sm text-gray-400">INR</p>
                </div>
              </div>

              <div
                className={`text-sm font-semibold flex flex-col ${
                  changePositive ? "text-green-500" : "text-red-500"
                } md:w-1/4`}
              >
                <span className="text-gray-500 text-xs">Change</span>
                <span>
                  {changePositive
                    ? `+${crypto.price_change_percentage_24h}%`
                    : `${crypto.price_change_percentage_24h}%`}
                </span>
              </div>

              <div className="text-sm font-medium flex flex-col md:w-1/4">
                <span className="text-gray-500 text-xs">Price</span>
                <span>{crypto.price.toLocaleString()} INR</span>
              </div>

              <div className="h-16 flex flex-col md:w-1/6">
                <span className="text-gray-500 text-xs">Chart</span>
                <Chart
                  sparklineData={sparklineData}
                  iconColor={crypto.iconColor}
                />
              </div>

              <div className="flex justify-start md:justify-end md:w-1/6">
                <Button
                  text="Trade"
                  variant="badge"
                  rounded="full"
                  className="border-none"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          text="View Other Crypto"
          variant="badge"
          rounded="full"
          className="w-full md:w-1/3"
        />
      </div>
    </div>
  );
};

export default CryptoTable;
