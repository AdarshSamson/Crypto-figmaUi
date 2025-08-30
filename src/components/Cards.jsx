import React from "react";
import Button from "./Button";

const CryptoCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-primary/8 rounded-4xl mb-2  p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      <div className="flex flex-col items-center gap-2 mb-2">
        {icon && (
          <div className="bg-primary/10 p-6 rounded-lg text-primary text-3xl">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-bold text-center text-gray-200 mb-3">
          {title}
        </h3>
      </div>
      {description && (
        <p className="text-gray-300 text-sm mb-3 text-center">{description}</p>
      )}
      {buttonText && (
        <div className="mt-6  flex justify-center">
          <Button text={buttonText} variant="badge" rounded="full" />
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
