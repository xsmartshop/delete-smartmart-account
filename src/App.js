import React from "react";

const appName = "SMART MART";

const deletionSteps = [
  "1. Open the Smart Mart app on your device.",
  "2. Go to your account settings.",
  '3. Locate the "Delete Account" option.',
  "4. Follow the on-screen prompts to confirm your deletion request.",
];

const dataTypes = [
  "Account information (name, email address)",
  "Purchase history (excluding receipts for tax purposes)",
  "User preferences (language, location)",
  // Add or remove data types as needed
];

const retainedData = ["Aggregated purchase data (not linked to your account)"];

const retentionPeriod =
  "We may retain anonymized data for up to 2 years for analytical purposes.";

function App() {
  return (
    <div className="container">
      <h1>Data Deletion Request for {appName}</h1>
      <p>
        This page allows you to request the deletion of your account data
        associated with the {appName} mobile app.
      </p>
      <h2>How to Request Account Deletion</h2>
      <ol>
        {deletionSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <h2>Data Deleted Upon Request</h2>
      <ul>
        {dataTypes.map((dataType) => (
          <li key={dataType}>{dataType}</li>
        ))}
      </ul>
      <h2>Data Potentially Retained</h2>
      <ul>
        {retainedData.length > 0 ? (
          retainedData.map((data) => <li key={data}>{data}</li>)
        ) : (
          <li>No data is retained after account deletion.</li>
        )}
      </ul>
      <p>{retentionPeriod}</p>
      <p>
        For any further inquiries regarding data deletion, please contact us at
        [your contact email address].
      </p>
    </div>
  );
}

export default App;
