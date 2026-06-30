function AppInfo({ step }) {

  if (step === 1) {
    return (

    
      <div className="act-info" >
        <h2>According to DPDP ACT 2023,</h2>
        <p>User has the right to access, correct, and delete their personal data.</p>
      </div>
    );
  }

  return (
    <div className="act-info">
      <h2>Child data protection</h2>
      <p>Select the permissions you want to grant.</p>
    </div>
  );
}

export default AppInfo;