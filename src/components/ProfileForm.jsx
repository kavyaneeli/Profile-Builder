import { useState } from "react";

const emptyForm = {
  name: "",
  role: "",
  email: "",
  location: "",
  skills: "",
  about: "",
  avatar: "",
  experience: [],
  education: []
};

function ProfileForm({ addProfile }) {
  const [formData, setFormData] = useState(emptyForm);

  const [experience, setExperience] = useState({
    company: "",
    role: ""
  });

  const [education, setEducation] = useState({
    school: "",
    degree: ""
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function addExperience() {
    if (!experience.company.trim() || !experience.role.trim()) {
      alert("Enter company and role");
      return;
    }

    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { ...experience, id: Date.now() }
      ]
    });

    setExperience({ company: "", role: "" });
  }

  function removeExperience(id) {
    setFormData({
      ...formData,
      experience: formData.experience.filter(item => item.id !== id)
    });
  }

  function addEducation() {
    if (!education.school.trim() || !education.degree.trim()) {
      alert("Enter school and degree");
      return;
    }

    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { ...education, id: Date.now() }
      ]
    });

    setEducation({ school: "", degree: "" });
  }

  function removeEducation(id) {
    setFormData({
      ...formData,
      education: formData.education.filter(item => item.id !== id)
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    addProfile(formData);
    setFormData(emptyForm);
  }

  return (
    <form className="profile-form" onSubmit={submitHandler}>
      <h2>Create Developer Profile</h2>

      <label>Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={onChangeHandler}
        placeholder="Enter your name"
        required
      />

      <label>Role</label>
      <input
        name="role"
        value={formData.role}
        onChange={onChangeHandler}
        placeholder="Frontend Developer"
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        placeholder="Enter email"
        required
      />

      <label>Location</label>
      <input
        name="location"
        value={formData.location}
        onChange={onChangeHandler}
        placeholder="Enter location"
        required
      />

      <label>Skills (comma separated)</label>
      <input
        name="skills"
        value={formData.skills}
        onChange={onChangeHandler}
        placeholder="React, JavaScript, HTML, CSS"
      />

      <label>About</label>
      <textarea
        name="about"
        value={formData.about}
        onChange={onChangeHandler}
        placeholder="Write about yourself"
      />

      <label>Avatar Image URL</label>
      <input
        name="avatar"
        value={formData.avatar}
        onChange={onChangeHandler}
        placeholder="Enter image URL"
      />

      <hr />

      <h3>Work Experience</h3>

      <input
        placeholder="Company"
        value={experience.company}
        onChange={e =>
          setExperience({ ...experience, company: e.target.value })
        }
      />

      <input
        placeholder="Job Role"
        value={experience.role}
        onChange={e =>
          setExperience({ ...experience, role: e.target.value })
        }
      />

      <button type="button" onClick={addExperience}>
        + Add Experience
      </button>

      {formData.experience.map(item => (
        <div className="record" key={item.id}>
          <span>{item.role} - {item.company}</span>
          <button type="button" onClick={() => removeExperience(item.id)}>
            X
          </button>
        </div>
      ))}

      <hr />

      <h3>Education</h3>

      <input
        placeholder="School / College"
        value={education.school}
        onChange={e =>
          setEducation({ ...education, school: e.target.value })
        }
      />

      <input
        placeholder="Degree"
        value={education.degree}
        onChange={e =>
          setEducation({ ...education, degree: e.target.value })
        }
      />

      <button type="button" onClick={addEducation}>
        + Add Education
      </button>

      {formData.education.map(item => (
        <div className="record" key={item.id}>
          <span>{item.degree} - {item.school}</span>
          <button type="button" onClick={() => removeEducation(item.id)}>
            X
          </button>
        </div>
      ))}

      <hr />

      <button className="save-btn" type="submit">
        Save Profile
      </button>
    </form>
  );
}

export default ProfileForm;