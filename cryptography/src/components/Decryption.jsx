"use client";

import { useState } from "react";
import { Decryption_AES256CBC } from "@/services/APIs";

export default function Decryption() {
  const [inputData, setInputData] = useState("");
  const [inputKey, setInputKey] = useState("");
  const [InputError, setInputError] = useState("");
  const [KeyError, setKeyError] = useState("");
  const [OtherError, setOtherErrors] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const [OutputData, setOutputData] = useState("");

  const submitHandler = async () => {
    setInputError("");
    setKeyError("");
    setOtherErrors("");

    if (!inputData.length) {
      setInputError("Input Data can not be empty!");
      return;
    }

    if (!inputKey.length) {
      setKeyError("Input Key can not be empty!");
      return;
    }

    setIsLoading(true);

    const data = await Decryption_AES256CBC({ data: inputData, key: inputKey });
    if (data?.status === 200) {
      setOutputData(data?.decrypted);
    } else {
      setOtherErrors(JSON.stringify(data?.error || "Unexpected Error!"));
    }

    setIsLoading(false);
  };

  const clearInputs = () => {
    setInputData("");
    setOutputData("");
    setInputKey("");
    setInputError("");
    setKeyError("");
    setOtherErrors("");
  };

  return (
    <div className="flex-1">
      {/* Decryption Input */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold ml-1">Decryption Inputs</span>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Provide your Encrypted Data here</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 rounded-sm max-w-full"
            placeholder="Your data that you want to decrypt!"
            value={inputData}
            onChange={(e) =>
              setInputData(e.target.value.replace(/\s/g, "").trim())
            }
          ></textarea>
          {InputError && (
            <div className="label">
              <span className="label-text-alt text-error">{InputError}</span>
            </div>
          )}
        </label>

        <label className="form-control">
          <textarea
            className="textarea textarea-bordered h-8 rounded-sm"
            placeholder="Your decryption key!"
            value={inputKey}
            onChange={(e) => {
              setInputKey(e.target.value.replace(/\s/g, "").trim());
            }}
          ></textarea>
          {KeyError && (
            <div className="label">
              <span className="label-text-alt text-error">{KeyError}</span>
            </div>
          )}
        </label>

        <div className="flex gap-2 w-full">
          <button
            className="btn md:btn-wide btn-neutral rounded-sm flex-1"
            onClick={!IsLoading ? submitHandler : null}
          >
            {IsLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Decrypt"
            )}
          </button>
          <button
            className="btn md:btn-wide btn-warning rounded-sm flex-1"
            onClick={clearInputs}
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
        <span className="font-semibold">Decryption Output</span>
        <div className="w-full bg-white border shadow p-4 flex flex-col gap-2">
          <div>
            <p className="text-xs text-gray-500">Your Decrypted Output:</p>
            <p
              style={{
                display: "flex",
                wordBreak: "break-all",
              }}
            >
              {OutputData ? OutputData : "Decrypted Code Value"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
