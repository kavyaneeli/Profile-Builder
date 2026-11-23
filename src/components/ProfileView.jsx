function ProfileView({ profile, goBack, deleteProfile }) {
  const skills = profile.skills
    ? profile.skills.split(",").map(skill => skill.trim()).filter(Boolean)
    : [];

  return (
    <div className="profile-view">
      <div className="view-header">

        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            className="large-avatar"
          />
        ) : (
          <div className="large-avatar fallback">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h2>{profile.name}</h2>
          <h3>{profile.role}</h3>
          <p>{profile.location} - {profile.email}</p>
        </div>
      </div>

      <div className="section">
        <h3>About</h3>
        <p>{profile.about || "No information added."}</p>
      </div>

      <div className="section">
        <h3>Skills</h3>

        <div className="skills">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))
          ) : (
            <p>No skills added.</p>
          )}
        </div>
      </div>

      <div className="section">
        <h3>Work Experience</h3>

        {profile.experience?.length > 0 ? (
          profile.experience.map(item => (
            <div className="record" key={item.id}>
              <div>
                <strong>{item.role}</strong>
                <p>{item.company}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No experience added.</p>
        )}
      </div>

      <div className="section">
        <h3>Education</h3>

        {profile.education?.length > 0 ? (
          profile.education.map(item => (
            <div className="record" key={item.id}>
              <div>
                <strong>{item.degree}</strong>
                <p>{item.school}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No education added.</p>
        )}
      </div>

      <div className="actions">
        <button onClick={goBack}>Back to Profiles</button>

        <button
          className="delete-btn"
          onClick={() => {
            if (window.confirm("Delete this profile?")) {
              deleteProfile(profile.id);
            }
          }}
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileView;