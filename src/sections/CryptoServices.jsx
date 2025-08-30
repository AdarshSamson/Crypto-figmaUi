import React from "react";
import cryptoData from "../data/cryptoServices.json";
import {
  FaGraduationCap,
  FaCoins,
  FaChartLine,
  FaWallet,
} from "react-icons/fa";
import CryptoCard from "../components/Cards";
import Button from "../components/Button";

const CryptoServices = () => {
  const { cryptoServicesData, featuredTopics } = cryptoData;

  const iconMap = {
    FaGraduationCap: <FaGraduationCap />,
    FaCoins: <FaCoins />,
    FaChartLine: <FaChartLine />,
    FaWallet: <FaWallet />,
  };

  return (
    <section className="py-16 px-8 bg-[#000625]">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Button
            text={"Learn Crypto"}
            variant="badge"
            rounded="full"
            className="border-none bg-primary/10 text-primary/80 mb-2"
          />
          <h1 className="text-4xl mt-4 text-white max-w-2xl mx-auto">
            Let's Know How Crypto Works
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-6 gap-6  mb-12 max-w-4xl text-center mx-auto">
          {cryptoServicesData.map((service, index) => (
            <CryptoCard
              key={index}
              icon={iconMap[service.icon]}
              title={service.title}
            />
          ))}
        </div>


        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Array(6)
              .fill(featuredTopics)
              .flat()
              .map((topic, index) => (
                <CryptoCard
                  key={index}
                  title={topic.title}
                  description={topic.description}
                  buttonText={topic.buttonText}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoServices;
