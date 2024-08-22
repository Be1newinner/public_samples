"use client";

import { useState } from "react";
import { Encryption_AES256CBC } from "@/services/APIs";

export default function Encryption() {
  const [inputData, setInputData] = useState("");
  const [InputError, setInputError] = useState("");
  const [OtherError, setOtherErrors] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const [OutputData, setOutputData] = useState("");
  const [OutputKey, setOutputKey] = useState("");

  const submitHandler = async () => {
    setInputError("");
    setOtherErrors("");

    if (!inputData) {
      setInputError("Input Data can not be empty!");
      return;
    }

    setIsLoading(true);

    const data = await Encryption_AES256CBC({ data: inputData });
    if (data?.status === 200) {
      setOutputData(data?.encrypted);
      setOutputKey(data?.key);
    } else {
      setOtherErrors(JSON.stringify(data?.error || "Unexpected Error!"));
    }

    setIsLoading(false);
  };

  const cliearInputs = () => {
    setInputData("");
    setOutputData("");
    setOutputKey("");
    setInputError("");
    setOtherErrors("");
  };

  return (
    <div className="flex-1">
      {/* Encryption Input */}
      <div>
        <span className="font-semibold ml-1">Encryption Inputs</span>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Provide your important Data here</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 sm:h-40 rounded-sm max-w-full"
            placeholder="Your data that you want to encrypt!"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></textarea>
          {InputError && (
            <div className="label">
              <span className="label-text-alt text-error">{InputError}</span>
            </div>
          )}
        </label>
        {/* <div className="form-control w-max">
          <label className="label cursor-pointer flex gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  rounded-sm"
            />
            <span className="label-text">Use Custom Encryption!!</span>
          </label>
        </div> */}

        <div className="flex gap-2 mt-2 w-full">
          <button
            className="btn md:btn-wide btn-neutral rounded-sm flex-1"
            onClick={!IsLoading ? submitHandler : null}
          >
            {IsLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Encrypt"
            )}
          </button>
          <button
            className="btn md:btn-wide btn-warning rounded-sm flex-1"
            onClick={cliearInputs}
          >
            Reset
          </button>
        </div>
      </div>

      {OtherError && (
        <div className="label">
          <span className="label-text-alt text-error">{OtherError}</span>
        </div>
      )}

      {/* Encryption Output */}
      <div className="py-8 flex flex-col gap-4">
        <span className="font-semibold">Encryption Output</span>
        <div className="w-full max-w-screen overflow-scroll bg-white border shadow p-4 flex flex-col gap-2">
          <div className="flex flex-wrap text-wrap">
            <p className="text-xs text-gray-500 ">Your Encryption Output:</p>
            <p
              style={{
                display: "flex",
                wordBreak: "break-all",
              }}
            >
              {OutputData ? OutputData : "Encryption Code Value"}
            </p>
          </div>
          {OutputKey && (
            <div>
              <p className="text-xs text-gray-500">Your Encryption key:</p>
              <p
                style={{
                  display: "flex",
                  wordBreak: "break-all",
                }}
              >
                {OutputKey}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
