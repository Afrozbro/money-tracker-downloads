import { useEffect, useState } from "react";

import {
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight,
  ChartNoAxesCombined,
  Receipt,
  PiggyBank,
  CircleDollarSign,
  Check,
  Play,
  Sparkles,
} from "lucide-react";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("money-tracker-theme");

    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("money-tracker-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const features = [
    {
      icon: Wallet,
      title: "Track Your Balance",
      description:
        "Always know how much money you have. Track your total balance in one place.",
    },
    {
      icon: ArrowDownLeft,
      title: "Income Tracking",
      description:
        "Record every amount you receive and keep your income organized.",
    },
    {
      icon: ArrowUpRight,
      title: "Expense Tracking",
      description:
        "Never lose track of where your money goes. Record every payment easily.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Financial Overview",
      description:
        "Understand your financial activity with a clear and simple overview.",
    },
    {
      icon: Receipt,
      title: "Transaction History",
      description:
        "Find your previous transactions whenever you need them.",
    },
    {
      icon: ShieldCheck,
      title: "Your Money, Your Control",
      description:
        "Keep your financial records organized and accessible on your device.",
    },
  ];

  const transactions = [
    {
      name: "Received from Rahul",
      date: "Today, 10:30 AM",
      amount: "+ ₹2,500",
      type: "income",
    },
    {
      name: "Grocery Shopping",
      date: "Today, 09:15 AM",
      amount: "- ₹850",
      type: "expense",
    },
    {
      name: "Given to Amit",
      date: "Yesterday",
      amount: "- ₹1,200",
      type: "expense",
    },
  ];

  return (
    <main className="website">

      {/* NAVBAR */}

      <nav className="navbar">
        <a href="#" className="brand">
          <div className="brand-icon">
            <Wallet size={23} />
          </div>

          <span>
            Money<span className="brand-highlight">Tracker</span>
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>

          <a href="#preview" onClick={() => setMenuOpen(false)}>
            Preview
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="https://drive.google.com/uc?export=download&id=1KEltppVzKFkqQmukhulfAnl1nyL0mQnT" onClick={() => setMenuOpen(false)}>
            Download
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a href="https://drive.google.com/uc?export=download&id=1KEltppVzKFkqQmukhulfAnl1nyL0mQnT" className="nav-download">
            Download App <Download size={16} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-background">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={15} />
            <span>Your Money. Your Control.</span>
          </div>

          <h1>
            Take Control of
            <br />
            Your Money.
            <br />

            <span className="gradient-text">
              Own Your Future.
            </span>
          </h1>

          <p className="hero-description">
            Every rupee matters. Track your income, expenses, and
            balance effortlessly with Money Tracker.
            Simple money management starts here.
          </p>

          <div className="hero-buttons">

            <a href="https://drive.google.com/uc?export=download&id=1KEltppVzKFkqQmukhulfAnl1nyL0mQnT" className="primary-button">
              <Download size={19} />
              Download for Android
              <ChevronRight size={18} />
            </a>

            <a href="#preview" className="secondary-button">
              <Play size={17} />
              Explore App
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>Simple. Smart. Organized.</strong>
              <span>Your personal money management companion.</span>
            </div>

          </div>

        </div>

        {/* DASHBOARD PREVIEW */}

        <div className="hero-visual" id="preview">

          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="floating-card income-float">
            <div className="float-icon income-icon">
              <ArrowDownLeft size={20} />
            </div>

            <div>
              <span>Money Received</span>
              <strong>+ ₹2,500</strong>
            </div>
          </div>

          <div className="floating-card expense-float">
            <div className="float-icon expense-icon">
              <ArrowUpRight size={20} />
            </div>

            <div>
              <span>Money Spent</span>
              <strong>- ₹850</strong>
            </div>
          </div>

          <div className="dashboard-card">

            <div className="dashboard-top">
              <div>
                <span className="dashboard-label">
                  Total Balance
                </span>

                <h2>₹45,850.00</h2>

                <div className="balance-change">
                  <TrendingUp size={15} />
                  <span>Looking good!</span>
                </div>
              </div>

              <div className="dashboard-wallet">
                <Wallet size={25} />
              </div>
            </div>

            <div className="dashboard-divider"></div>

            <div className="dashboard-stats">

              <div className="stat-box">
                <div className="stat-heading">
                  <span className="small-stat-icon green">
                    <ArrowDownLeft size={16} />
                  </span>
                  Income
                </div>

                <strong>₹28,500</strong>
              </div>

              <div className="stat-box">
                <div className="stat-heading">
                  <span className="small-stat-icon red">
                    <ArrowUpRight size={16} />
                  </span>
                  Expense
                </div>

                <strong>₹12,650</strong>
              </div>

            </div>

            <div className="transaction-header">
              <strong>Recent Transactions</strong>
              <span>View all</span>
            </div>

            <div className="transactions">

              {transactions.map((item, index) => (
                <div className="transaction" key={index}>

                  <div className={`transaction-icon ${item.type}`}>
                    {item.type === "income" ? (
                      <ArrowDownLeft size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}
                  </div>

                  <div className="transaction-info">
                    <strong>{item.name}</strong>
                    <span>{item.date}</span>
                  </div>

                  <strong
                    className={
                      item.type === "income"
                        ? "transaction-income"
                        : "transaction-expense"
                    }
                  >
                    {item.amount}
                  </strong>

                </div>
              ))}

            </div>

            <div className="dashboard-footer">
              <div className="footer-mini-icon">
                <ChartNoAxesCombined size={17} />
              </div>

              <span>Stay on top of your finances.</span>
            </div>

          </div>

          <div className="floating-coin coin-one">
            <CircleDollarSign size={27} />
          </div>

          <div className="floating-coin coin-two">
            <PiggyBank size={25} />
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features-section" id="features">

        <div className="section-heading">
          <div className="section-badge">POWERFUL FEATURES</div>

          <h2>
            Everything Your Money
            <br />
            <span className="gradient-text">Needs in One Place.</span>
          </h2>

          <p>
            Manage your daily finances without complicated
            spreadsheets or confusing tools.
          </p>
        </div>

        <div className="features-grid">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="feature-card"
                key={index}
                style={{ "--delay": `${index * 100}ms` }}
              >
                <div className="feature-icon">
                  <Icon size={25} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-arrow">
                  <ChevronRight size={19} />
                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="about-section" id="about">

        <div className="about-visual">

          <div className="about-circle">
            <Wallet size={70} />
          </div>

          <div className="about-floating about-floating-one">
            <Check size={17} />
            Easy to use
          </div>

          <div className="about-floating about-floating-two">
            <ShieldCheck size={17} />
            Your finances organized
          </div>

        </div>

        <div className="about-content">

          <div className="section-badge">WHY MONEY TRACKER?</div>

          <h2>
            Stop Guessing.
            <br />
            Start <span className="gradient-text">Tracking.</span>
          </h2>

          <p>
            Managing money should not be complicated.
            Money Tracker makes it easier to understand
            where your money comes from and where it goes.
          </p>

          <div className="about-points">

            <div>
              <Check size={18} />
              Record income and expenses easily.
            </div>

            <div>
              <Check size={18} />
              Keep track of your available balance.
            </div>

            <div>
              <Check size={18} />
              Review your transaction history.
            </div>

            <div>
              <Check size={18} />
              Manage your finances in one application.
            </div>

          </div>

          <a href="https://drive.google.com/uc?export=download&id=1KEltppVzKFkqQmukhulfAnl1nyL0mQnT" className="primary-button">
            Get Started <ChevronRight size={18} />
          </a>

        </div>

      </section>

      {/* DOWNLOAD SECTION */}

      <section className="download-section" id="download">

        <div className="download-glow"></div>

        <div className="download-content">

          <div className="section-badge download-badge">
            <Smartphone size={15} />
            YOUR FINANCIAL COMPANION
          </div>

          <h2>
            Your Money.
            <br />
            Your Rules.
            <br />
            <span>Start Tracking Today.</span>
          </h2>

          <p>
            Make every rupee count. Download Money Tracker
            and take your first step towards better money management.
          </p>

          <div className="download-buttons">

            <a
              href="https://drive.google.com/uc?export=download&id=1KEltppVzKFkqQmukhulfAnl1nyL0mQnT"
              className="download-main-button"
              download
            >
              <Download size={22} />

              <div>
                <span>DOWNLOAD FOR</span>
                <strong>Android APK</strong>
              </div>
            </a>

          </div>

          <div className="download-note">
            <ShieldCheck size={16} />
            Your personal finance companion.
          </div>

        </div>

        <div className="download-decoration">
          <div className="download-phone">
            <div className="phone-notch"></div>

            <div className="phone-logo">
              <Wallet size={36} />
            </div>

            <h3>Money Tracker</h3>
            <span>Manage your money smartly.</span>

            <div className="phone-balance">
              <span>Total Balance</span>
              <strong>₹45,850</strong>
            </div>

            <div className="phone-line"></div>

            <div className="phone-mini-stat">
              <span>Income</span>
              <strong>+ ₹28,500</strong>
            </div>

            <div className="phone-mini-stat">
              <span>Expense</span>
              <strong>- ₹12,650</strong>
            </div>

          </div>
        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-top">

          <a href="#" className="brand">
            <div className="brand-icon">
              <Wallet size={22} />
            </div>

            <span>
              Money<span className="brand-highlight">Tracker</span>
            </span>
          </a>

          <p>
            Make your money management simple.
            Track every rupee, every day.
          </p>

          <a href="https://drive.google.com/uc?export=download&id=1KEltppVzKFkqQmukhulfAnl1nyL0mQnT" className="footer-download">
            Download App <Download size={16} />
          </a>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Money Tracker. All rights reserved.
          </span>

          <span>Made with care ❤️</span>
        </div>

      </footer>

    </main>
  );
}

export default App;