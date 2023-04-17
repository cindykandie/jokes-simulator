import React from 'react';

function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <p>Customize your Jokes app:</p>
      <form>
        <label htmlFor="theme">Theme:</label>
        <select id="theme" name="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Settings;
