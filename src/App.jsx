


import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import ProfileView from "./components/ProfileView";

function App() {
  const [page, setPage] = useState("profiles");

  const [profiles, setProfiles] = useState(() => {
    return JSON.parse(localStorage.getItem("PROFILES")) || [];
  });

  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    localStorage.setItem("PROFILES", JSON.stringify(profiles));
  }, [profiles]);

  function addProfile(newProfile) {
    const profile = {
      ...newProfile,
      id: Date.now()
    };

    setProfiles([...profiles, profile]);
    setPage("profiles");
    setSelectedProfile(null);
  }

  function deleteProfile(id) {
    setProfiles(profiles.filter(p => p.id !== id));
    setSelectedProfile(null);
    setPage("profiles");
  }

  function showPage(pageName) {
    setPage(pageName);
    setSelectedProfile(null);
  }

  return (
    <div className="app">
      <h1 className="heading">Developer Profile Builder</h1>

      <Navbar showPage={showPage} page={page} />

      <main className="container">
        {page === "create" && (
          <ProfileForm addProfile={addProfile} />
        )}

        {page === "profiles" && !selectedProfile && (
          <ProfileList
            profiles={profiles}
            selectProfile={setSelectedProfile}
          />
        )}

        {page === "profiles" && selectedProfile && (
          <ProfileView
            profile={selectedProfile}
            goBack={() => setSelectedProfile(null)}
            deleteProfile={deleteProfile}
          />
        )}
      </main>
    </div>
  );
}

export default App;