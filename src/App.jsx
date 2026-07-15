import { useState } from "react";

export default function StormwaterAgentVault() {
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(uploadedFiles);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow">
        <h1 className="text-4xl font-bold">
          Stormwater Agent Vault
        </h1>
        <p className="mt-2">
          AI-powered stormwater knowledge repository
        </p>
      </header>

      <main className="max-w-6xl mx-auto p-6">

        {/* Upload Section */}
        <section className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Upload Documents
          </h2>

          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt,.xlsx"
            onChange={handleUpload}
            className="mb-4"
          />

          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">
              Uploaded Documents
            </h3>

            {files.length === 0 ? (
              <p>No files uploaded</p>
            ) : (
              <ul>
                {files.map((file) => (
                  <li key={file.name}>
                    📄 {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">
              PDF Extraction
            </h3>

            <p>
              Automatically extract text from uploaded
              engineering reports, permits, SOPs,
              SWPPPs, and manuals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">
              AI Search
            </h3>

            <p>
              Search thousands of pages using
              semantic vector search.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">
              Stormwater Assistant
            </h3>

            <p>
              Ask questions about permits,
              inspections, MS4 requirements,
              SWPPP procedures, and regulations.
            </p>
          </div>

        </section>

        {/* Chat Placeholder */}
        <section className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            AI Chat
          </h2>

          <textarea
            className="w-full border rounded p-3"
            rows="4"
            placeholder="Ask a question about uploaded documents..."
          />

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Ask Agent
          </button>
        </section>

      </main>
    </div>
  );
}
`
