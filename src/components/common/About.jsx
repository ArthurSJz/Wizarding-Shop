import flow from "../../assets/flow.png";

function About() {
  return (
    <div className="about-page">
      <h1>Welcome to The Wizarding Shop ⚡</h1>
      <h2>Where Magic Meets Code.</h2>
      <p>
        At <span className="gold-color">The Wizarding Shop</span>, we believe
        that you don’t need to find Platform 9 ¾ to access the finest magical
        goods in the United Kingdom. Whether you are a brave Gryffindor looking
        for a new set of robes or a budding Potions Master in need of rare
        ingredients, our shop is designed to bring the Wizarding World directly
        to your screen.
      </p>

      <h2>Our Story: A Tale of Two Developers</h2>
      <h3>
        The Wizarding Shop didn't start in Diagon Alley —
        <span className="gold-color"> it started in a coding bootcamp.</span>
      </h3>
      <p>
        Founded by Alexandra and Arthur, this shop is the culmination of a
        "final boss" challenge in our journey to becoming Full-Stack Developers.
        We were tasked with building a{" "}
        <b>fully functional CRUD (Create, Read, Update, Delete)</b> application
        using React, and we decided to infuse that mission with a bit of magic.
      </p>
      <img src={flow} className="about-img" alt="navigation flow" />

      <h3>The Magic Behind the Curtain</h3>
      <p>
        While it might look like "Aguamenti" is powering our database, there is
        some serious Muggle technology under the hood:
      </p>
      <ul className="unordered-list">
        <li>
          <b>Frontend Mastery:</b> Built with React, ensuring a smooth,
          single-page experience that’s faster than a Firebolt.
        </li>
        <li>
          <b>The CRUD Spell:</b> We’ve implemented full CRUD functionality,
          allowing us to manage our inventory of wands, potions, and enchanted
          items in real-time.
        </li>
        <li>
          <b>State Management:</b> Keeping track of your shopping cart across
          the site using modern React hooks.
        </li>
        <li>
          <b>Collaborative Sorcery:</b> This project was a true partnership
          between Arthur and myself, utilizing Git for version control and agile
          methodologies to meet our bootcamp deadlines
        </li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        Our goal wasn't just to pass a class; it was to build an immersive
        experience. We wanted to see if we could take the complexity of modern
        web development and make it feel as effortless as a wave of a wand.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Favorite Spell</th>
          </tr>
          <tr>
            <td>Alexandra</td>
            <td>Lead Developer</td>
            <td>Expecto Patronum</td>
          </tr>
          <tr>
            <td>Arthur</td>
            <td>Lead Developer</td>
            <td>Accio Code</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default About;
