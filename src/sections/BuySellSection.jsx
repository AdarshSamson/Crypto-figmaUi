// sections/BuySellSection.jsx
import React, { useState } from "react";
import { FaBitcoin, FaExchangeAlt, FaRupeeSign } from "react-icons/fa";
import Button from "../components/Button";
import GlassmorphicCard from "../components/GlassmorphicCard";

const BuySellSection = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [spendAmount, setSpendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");

  return (
    <GlassmorphicCard>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-1 border border-gray-600/30">
            <div className="flex gap-1">
              <Button
                onClick={() => setActiveTab("buy")}
                text={"Buy"}
                variant={activeTab === "buy" ? "primary" : ""}
                rounded="lg"
                className={` ${
                  activeTab === "buy"
                    ? ""
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                Buy
              </Button>

              <Button
                text={"Sell"}
                variant={activeTab === "sell" ? "danger" : ""}
                rounded="lg"
                onClick={() => setActiveTab("sell")}
                className={` ${
                  activeTab === "sell"
                    ? ""
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                Sell
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-2 ">
          <div className="flex-1 group/input p-0">
            <label className="text-gray-400 text-sm font-medium mb-2 block">
              I Will Spend
            </label>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center bg-gray-800/70 backdrop-blur-sm border border-gray-600/40 rounded-xl px-1 py-1 hover:border-gray-500/60 transition-all duration-300">
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-500"
                  value={spendAmount}
                  onChange={(e) => setSpendAmount(e.target.value)}
                />
                <div className="flex items-center gap-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg px-1 py-1.5  border border-indigo-500/30">
                  <FaRupeeSign className="text-indigo-400 text-sm" />
                  <span className="text-white font-semibold text-sm">INR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center mt-8 p-0">
            <div className="relative group/exchange">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover/exchange:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 p-2 rounded-full hover:border-cyan-500/60 hover:rotate-180 transition-all duration-500 cursor-pointer">
                <FaExchangeAlt className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="flex-1 group/input p-0">
            <label className="text-gray-400 text-sm font-medium mb-2 block">
              I Will Receive
            </label>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center bg-gray-800/70 backdrop-blur-sm border border-gray-600/40 rounded-xl px-1 py-1 hover:border-gray-500/60 transition-all duration-300">
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-500"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                />
                <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg px-1 py-1.5  border border-yellow-500/30">
                  <FaBitcoin className="text-yellow-400 text-sm" />
                  <span className="text-white font-semibold text-sm">BTC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <Button
              text={activeTab === "buy" ? "Buy Crypto" : "Sell Crypto"}
              variant={activeTab === "buy" ? "primary" : "danger"}
              rounded="lg"
              className="h-10  flex items-center whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default BuySellSection;
