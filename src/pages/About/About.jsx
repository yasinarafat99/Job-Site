import './About.css'

function About() {
  return (
    <>
        <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our job site! We are dedicated to connecting employers with
        qualified candidates and helping job seekers find their dream careers.
      </p>
      <p>
        Our mission is to make the job search and hiring process efficient,
        seamless, and enjoyable for both employers and job seekers.
      </p>
      <h2>Our Mission</h2>
      <p>
        To empower individuals by providing a platform that connects them with
        meaningful employment opportunities, fostering professional growth and
        success.
      </p>
      <h2>Core Values</h2>
      <ul>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Collaboration</li>
        <li>Diversity & Inclusion</li>
        
      </ul>
      <h2>Why Choose Us?</h2>
      <p>
        We strive to create a positive and inclusive environment where talent
        meets opportunity. Here are a few reasons why you should choose our job
        site:
      </p>
      <ul>
        <li>Extensive Job Listings</li>
        <li>User-Friendly Interface</li>
        <li>Advanced Search Features</li>
        <li>Personalized Job Recommendations</li>
      </ul>
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="https://w7.pngwing.com/pngs/219/345/png-transparent-computer-software-computer-icons-team-members-photography-team-logo.png" alt="Team Member 1" />
          <h3>Yasin Arafat</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://w7.pngwing.com/pngs/219/345/png-transparent-computer-software-computer-icons-team-members-photography-team-logo.png" alt="Team Member 2" />
          <h3>Shakil Arafat</h3>
          <p>CTO</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;