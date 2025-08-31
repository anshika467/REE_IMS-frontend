import CertificateButton from "./CertificateButton"

function App() {
  const applicationId = 1; // Example application ID

  return (
    <>
    <div className="text-3xl text-center font-bold underline mt-20">
      Click the Below Button!!!
    </div>
    <div className="text-center m-5 p-6">
      <CertificateButton applicationId={applicationId} />
    </div>
    </>
  )
}

export default App
