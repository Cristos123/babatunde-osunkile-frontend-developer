import React from "react";
import { useGetRocketsDetailsQuery } from "../service/apiSlice";
import { useParams } from "react-router-dom";

const RocketDetails = ({ rocket, onClose }) => {
  let rocket_id = useParams();
  console.log("{ rocket_id }", rocket_id);
  const { isLoading, isError, data } = useGetRocketsDetailsQuery(rocket_id.id);
  console.log({ data }, " indeed");
  return (
    <div className="container mx-auto md:mx-5 py-8">
      <h1 className="text-2xl text-center font-semibold mb-4">
        Rocket Details
      </h1>
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{data?.rocket_name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data?.flickr_images.map((image, index) => (
            <a
              key={index}
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={image}
                alt={`Flickr Image ${index}`}
                className="w-full h-auto rounded-lg hover:opacity-75 transition duration-300"
              />
            </a>
          ))}
        </div>

        <p className="text-gray-600 py-2"> {data?.description}</p>
        <p className="text-gray-600 py-2">
          Country: {data?.country}, Company: {data?.company}
        </p>
        <p className="text-gray-600 py-2">
          Wikipedia: <a href={data?.wikipedia}>{data?.wikipedia}</a>
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Engines</h3>
          <ul className="list-disc pl-6">
            <li>Engine loss max: {data?.engines.engine_loss_max}</li>
            <li>
              Engine isp: sea level {data?.engines.isp.sea_level}, vacuum{" "}
              {data?.engines.isp.vacuum}
            </li>
            <li>Engine Layout: {data?.engines.layout}</li>
            <li>Number of Engines: {data?.engines.number}</li>
            <li>Engine propellant 1: {data?.engines.propellant_1}</li>
            <li>Engine propellant 2: {data?.engines.propellant_2}</li>
            <li>
              Engine thrust sea level: kN {data?.engines.thrust_sea_level.kN},
              lbf {data?.engines.thrust_sea_level.kN}
            </li>
            <li>Engine thrust to weight: {data?.engines.thrust_to_weight}</li>
            <li>
              Engine thrust vacuum: kN {data?.engines.thrust_vacuum.kN}, lbf{" "}
              {data?.engines.thrust_vacuum.lbf}
            </li>
            <li>Engine Type: {data?.engines.type}</li>
            <li>Engine version: {data?.engines.version}</li>
          </ul>
        </div>

        <div className="my-4">
          <h3 className="font-semibold text-lg mb-2">First Stage</h3>
          <ul className="list-disc pl-6">
            <li>Burn Time: {data?.first_stage.burn_time_sec} sec</li>
            <li>Engines: {data?.first_stage.engines}</li>
            <li>Fuel Amount: {data?.first_stage.fuel_amount_tons} tons</li>
            <li>Reusability: {data?.first_stage.reusable.toString()}</li>
            <li>
              Thrust Sea Level: kN {data?.first_stage.thrust_sea_level.kN}, lbf{" "}
              {data?.first_stage.thrust_sea_level.lbf}
            </li>
            <li>
              Thrust Vacuum: kN {data?.first_stage.thrust_vacuum.kN}, lbf{" "}
              {data?.first_stage.thrust_vacuum.lbf}
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="mb-2">Payload Weights:</p>
          <ul className="list-disc pl-6 space-y-1">
            {data?.payload_weights.map((weight) => (
              <li key={weight.id} className="text-gray-600">
                {weight.name}: {weight.kg} kg, {weight.lb} lb
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <p className="mb-2">Second Stage:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-gray-600">
              Burn Time: {data?.second_stage.burn_time_sec} sec
            </li>
            <li className="text-gray-600">
              Engines: {data?.second_stage.engines}
            </li>
            <li className="text-gray-600">
              Fuel Amount: {data?.second_stage.fuel_amount_tons} tons
            </li>
            <li className="text-gray-600">
              Thrust: KN {data?.second_stage.thrust.kN}, lbf{" "}
              {data?.second_stage.thrust.lbf}
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="mb-2">Composite Fairing:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-gray-600">
              Diameter:{" "}
              {data?.second_stage.payloads.composite_fairing.diameter.meters}{" "}
              meters,
              {data?.second_stage.payloads.composite_fairing.diameter.feet} feet
            </li>
            <li className="text-gray-600">
              Height:{" "}
              {data?.second_stage.payloads.composite_fairing.height.meters}{" "}
              meters,
              {data?.second_stage.payloads.composite_fairing.height.feet} feet
            </li>
            <li className="text-gray-600">
              Option 1: {data?.second_stage.payloads.option_1}, Option 2:{" "}
              {data?.second_stage.payloads.option_2}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RocketDetails;
