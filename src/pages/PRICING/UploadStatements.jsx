import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import {
  AlertCircle,
  CloudUpload,
  Check,
  FileSpreadsheet,
  FileText,
  X,
} from "lucide-react";

const ACCEPTED_FILE_TYPES = {
  "application/pdf": [".pdf"],
  "text/csv": [".csv"],
  "application/csv": [".csv"],
  "application/vnd.ms-excel": [".csv"],
};

const FORMAT_BADGES = [
  { label: "PDF", Icon: FileText },
  { label: "CSV", Icon: FileSpreadsheet },
];

function FileFormatBadge({ label, Icon }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 text-[#2f2f2f]">
      <Icon className="h-5 w-5 text-[#8a9439]" strokeWidth={1.8} />
      <span className="text-[17px] font-medium">{label}</span>
    </div>
  );
}

function UploadSuccess({ onClose }) {
  return (
    <div className="flex min-h-[60px] min-w-[60px] flex-col items-center justify-center px-6 py-20 text-center ">
      <div className="grid h-[120px] w-[120px] place-items-center rounded-full bg-[#f0f4d4] ">
        <div className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#00a978] shadow-[0_14px_28px_rgba(0,169,120,0.24)] ">
          <Check className="h-8 w-8 text-[#f7f2d8] " strokeWidth={3.2} />
        </div>
      </div>

      <h2 className="mt-10 text-[24px] font-extrabold tracking-[-0.04em] text-[#000000] sm:mt-12">
        Talk to you soon.
      </h2>

      <p className="mt-6 max-w-[860px] text-[15px] leading-[1.9] text-[#171717] ">
        Your request has been received. Our team will review
        <br className="hidden sm:block" />
        your message and get back to you shortly.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-12 rounded-full border border-[#dfe5c4] bg-[#f6f8ea] px-6 py-3 text-[15px] font-semibold text-[#637524] transition-colors hover:bg-[#eef3d7]"
      >
        Back to pricing
      </button>
    </div>
  );
}

export default function UploadStatements() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    accept: ACCEPTED_FILE_TYPES,
    multiple: true,
    maxFiles: 2,
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setSubmitted(false);
      setFiles(acceptedFiles.slice(0, 2));
    },
  });

  const handleClose = () => navigate("/pricing");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (files.length === 0) {
      open();
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-manrope pt-28 pb-16 sm:pt-32">
      <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-[10px] bg-[#edf2c5]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-[10px] bg-[#f1f4db]/45 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-180px)] w-full max-w-[1200px] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[800px] overflow-hidden rounded-[10px] bg-white shadow-[0_28px_90px_rgba(68,76,27,0.16)] ring-1 ring-[#eef0e3]">
          {submitted ? (
            <UploadSuccess onClose={handleClose} />
          ) : (
            <>
              <div className="flex items-center justify-between border-b border-[#eceee3] px-6 py-6 sm:px-8">
                <h1 className="text-[20px] font-medium tracking-[-0.02em] text-[#000000] sm:text-[28px]">
                  Upload Processing Statements
                </h1>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close upload statements"
                  className="rounded-[10px] p-1 text-[#454545] transition-colors hover:bg-[#f4f6eb] hover:text-[#111111]"
                >
                  <X className="h-7 w-7" strokeWidth={1.75} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="px-5 py-6 sm:px-8 sm:py-8">
                  <div
                    {...getRootProps()}
                    className={`rounded-[32px] border-2 border-dashed px-5 py-10 text-center transition-all duration-200 sm:px-8 sm:py-12 ${
                      isDragActive
                        ? "border-[#7a8830] bg-[#f7f9e2] shadow-[inset_0_0_0_1px_rgba(122,136,48,0.08)]"
                        : "border-[#98a145] bg-[#fbfcea]"
                    }`}
                    onClick={open}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        open();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <input {...getInputProps()} />

                    <div className="mx-auto flex max-w-[560px] flex-col items-center gap-5">
                      <div className="grid h-20 w-20 place-items-center rounded-[20px] bg-[#eef1c6] text-[#74812c] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                        <CloudUpload className="h-10 w-10" strokeWidth={1.8} />
                      </div>

                      <div className="space-y-2">
                        <p className="text-[18px] font-medium leading-tight tracking-[-0.02em] text-[#000000] sm:text-[25px]">
                          Drag and drop your statements here
                        </p>

                        <p className="text-[15px] leading-relaxed text-[#3f3f3f] sm:text-[18px]">
                          or{" "}
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              open();
                            }}
                            className="font-medium text-[#74812c] underline decoration-[#74812c]/70 underline-offset-4 transition-colors hover:text-[#637524]"
                          >
                            browse files
                          </button>{" "}
                          from your computer
                        </p>
                      </div>

                      <div className="flex flex-wrap items-stretch justify-center overflow-hidden rounded-[18px] border border-[#e5e5dc] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
                        {FORMAT_BADGES.map(({ label, Icon }) => (
                          <FileFormatBadge key={label} label={label} Icon={Icon} />
                        ))}
                      </div>

                      <p className="text-[13px] font-medium text-[#768137] sm:text-sm">
                        {isDragActive
                          ? "Release to add the files."
                          : "Accepted formats: PDF or CSV, up to 2 files."}
                      </p>

                      {files.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 pt-1">
                          {files.map((file) => (
                            <span
                              key={`${file.name}-${file.size}`}
                              className="inline-flex max-w-full items-center rounded-full bg-[#f4f7e1] px-3 py-1.5 text-[12px] font-medium text-[#4e5a1f]"
                              title={file.name}
                            >
                              {file.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 rounded-[28px] bg-[#f2f4d9] px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#7a8830] text-white shadow-[0_8px_18px_rgba(122,136,48,0.22)]">
                        <AlertCircle className="h-7 w-7" strokeWidth={1.8} />
                      </div>

                      <div className="pt-1">
                        <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#111111] sm:text-[24px]">
                          Submission Requirements
                        </h2>

                        <p className="mt-1 max-w-[560px] text-[15px] leading-7 text-[#303030] sm:text-[17px]">
                          Please ensure you upload the last 2 months of your
                          processing statements. Files should be original digital
                          exports from your banking portal for optimal data
                          verification.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#eceee3] px-5 py-5 sm:px-8 sm:py-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="h-[64px] rounded-[22px] bg-[#eef0f3] text-[18px] font-medium text-[#3d3d3d] transition-all duration-200 hover:bg-[#e4e7eb]"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="h-[64px] rounded-[22px] bg-[#637524] text-[18px] font-medium text-white shadow-[0_10px_24px_rgba(99,117,36,0.24)] transition-all duration-200 hover:bg-[#55671f]"
                    >
                      Upload Statements
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
