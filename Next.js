
export default function Home() {
  return (
    <>
      <div className="container">
        {/* NAVBAR */}
        <nav>
          <h1>SafeRide</h1>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* HERO SECTION */}
        <section className="hero">
          <h2>Smart Accident Detection System</h2>

          <p>
            A smart emergency response platform that detects accidents,
            shares live location, and sends instant alerts to emergency contacts
            for faster medical assistance and improved road safety.
          </p>

          <button className="btn">Explore Project</button>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="card">
            <h3>Accident Detection</h3>
            <p>Detects sudden impacts and abnormal vehicle movements automatically.</p>
          </div>

          <div className="card">
            <h3>Emergency Alerts</h3>
            <p>Sends instant emergency notifications to family members and contacts.</p>
          </div>

          <div className="card">
            <h3>Live GPS Tracking</h3>
            <p>Shares the exact accident location using GPS for quick response.</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          © 2026 Smart Accident Detection System
        </footer>
      </div>

      {/* STYLES (inside same file) */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .container {
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          color: white;
          min-height: 100vh;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
        }

        nav h1 {
          font-size: 30px;
          color: #00e5ff;
        }

        nav ul {
          display: flex;
          list-style: none;
          gap: 25px;
        }

        nav ul li a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }

        .hero {
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .hero h2 {
          font-size: 55px;
          margin-bottom: 20px;
        }

        .hero p {
          font-size: 22px;
          max-width: 800px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .btn {
          padding: 15px 35px;
          background: #00e5ff;
          border: none;
          border-radius: 30px;
          color: black;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          background: white;
          transform: scale(1.05);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          padding: 50px;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 20px;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .card h3 {
          margin-bottom: 15px;
          color: #00e5ff;
        }

        footer {
          text-align: center;
          padding: 20px;
          margin-top: 30px;
          color: #ddd;
        }
      `}</style>
    </>
  );
}
