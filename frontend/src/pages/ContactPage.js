// src/pages/ContactPage.js
import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    superBowl: 'N/A',
    favLanguage: 'no favorite language',
    sports: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        if (checked) {
          return { ...prevData, sports: [...prevData.sports, value] };
        } else {
          return { ...prevData, sports: prevData.sports.filter((sport) => sport !== value) };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Form submitted! Check the console for form data.');
  };

  return (
    <>
      <h2>Contact</h2>
      <section>
        <h3 style={{ color: '#F2BD1D' }}>Please enter the required information to contact.</h3>
        <p style={{ color: '#F2BD1D' }}>* indicates required information</p>
        <article>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Contact Information</legend>

              <label htmlFor="fullName" className="required"> Name:</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                size="25"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
              />

              <label htmlFor="email" className="required">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                size="30"
                pattern="[^ @]+@[^ @]+.[a-z]+"
                placeholder="placeholder@website.com"
                value={formData.email}
                onChange={handleChange}
              />

              <p>
                <label htmlFor="message" className="required">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </p>

            </fieldset>

            <fieldset>
              <legend>Optional Questions</legend>

              <label htmlFor="selectFootball">Who will win the Super Bowl?:</label>
              <select name="superBowl" id="selectFootball" value={formData.superBowl} onChange={handleChange}>
                <option value="N/A">N/A </option>
                <option value="the 49ers">49ers</option>
                <option value="the Eagles">Eagles</option>
                <option value="the Chiefs">Chiefs</option>
                <option value="the Dolphins">Dolphins</option>
              </select>

              <p>
                <label>Which programming language is your favorite?:</label>
                <label htmlFor="noFavorite">
                  <input type="radio" id="noFavorite" name="favLanguage" value="no favorite language"
                         checked={formData.favLanguage === 'no favorite language'}
                         onChange={handleChange} />
                  I do not have a favorite </label>
                <label htmlFor="python">
                  <input type="radio" id="python" name="favLanguage" value="Python"
                         checked={formData.favLanguage === 'Python'}
                         onChange={handleChange} />
                  Python</label>
                <label htmlFor="cpp">
                  <input type="radio" id="cpp" name="favLanguage" value="C++"
                         checked={formData.favLanguage === 'C++'}
                         onChange={handleChange} />
                  C++</label>
                <label htmlFor="javaScript">
                  <input type="radio" id="javaScript" name="favLanguage" value="Javascript"
                         checked={formData.favLanguage === 'Javascript'}
                         onChange={handleChange} />
                  Javascript</label>
                <label htmlFor="html">
                  <input type="radio" id="html" name="favLanguage" value="HTML"
                         checked={formData.favLanguage === 'HTML'}
                         onChange={handleChange} />
                  HTML</label>
              </p>

              <p>
                <label>What kind of sports do you follow:</label>
                <label htmlFor="soccer">
                  <input type="checkbox" id="soccer" name="sports" value="Soccer"
                         checked={formData.sports.includes('Soccer')}
                         onChange={handleChange} />
                  Soccer</label>
                <label htmlFor="football">
                  <input type="checkbox" id="football" name="sports" value="Football"
                         checked={formData.sports.includes('Football')}
                         onChange={handleChange} />
                  Football</label>
                <label htmlFor="basketball">
                  <input type="checkbox" id="basketball" name="sports" value="Basketball"
                         checked={formData.sports.includes('Basketball')}
                         onChange={handleChange} />
                  Basketball</label>
                <label htmlFor="other">
                  <input type="checkbox" id="other" name="sports" value="Other"
                         checked={formData.sports.includes('Other')}
                         onChange={handleChange} />
                  Other</label>
                <label htmlFor="none">
                  <input type="checkbox" id="none" name="sports" value="None"
                         checked={formData.sports.includes('None')}
                         onChange={handleChange} />
                  None</label>
              </p>

              <label id="submit">
                <button type="submit" id="submit" name="results">Submit</button>
              </label>

            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
}

export default ContactPage;