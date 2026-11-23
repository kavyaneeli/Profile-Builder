function ProfileList({ profiles, selectProfile }) {
  if (profiles.length === 0) {
    return (
      <div className="empty">
        <h2>No profiles yet!</h2>
        <p>Create a new profile to get started.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Saved Profiles</h2>

      <div className="profile-grid">
        {profiles.map(profile => (
          <button
            className="profile-card"
            key={profile.id}
            onClick={() => selectProfile(profile)}
          >
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="avatar"
              />
            ) : (
              <div className="avatar fallback">
                {profile.name.charAt(0).toUpperCase()}
              </div>
            )}

            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p>{profile.location}</p>

            <span className="view-link">View Profile →</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProfileList;