/* ===== GLOBAL ===== */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at 20% 30%, rgba(168,85,247,0.2), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(192,132,252,0.15), transparent 40%),
    linear-gradient(180deg, #1a0f35, #0e0620);
  color: white;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* ===== NAVBAR ===== */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15,5,30,0.7);
  backdrop-filter: blur(15px);
  box-sizing: border-box;
  z-index: 1000;
}

nav .links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

nav a {
  color: #c084fc;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

nav a:hover {
  color: #e6c77a;
  text-shadow: 0 0 10px #e6c77a;
}

/* ===== HERO ===== */
.hero {
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: clamp(40px, 8vw, 90px);
  color: #e6c77a;
  animation: glowPulse 4s infinite alternate;
}

@keyframes glowPulse {
  from { text-shadow: 0 0 20px #e6c77a; }
  to { text-shadow: 0 0 60px #c084fc; }
}

.hero p {
  font-size: 20px;
  color: #c084fc;
  margin-top: 10px;
}

/* ===== UN EMBLEM ===== */
.emblem {
  width: 200px;
  margin-bottom: 40px;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 0 20px #c084fc);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

/* ===== COUNTDOWN ===== */
#countdown {
  margin-top: 20px;
  font-size: 24px;
  color: #e6c77a;
  text-shadow: 0 0 15px #c084fc;
  letter-spacing: 2px;
  font-weight: bold;
}

/* ===== BUTTON ===== */
.btn {
  padding: 14px 40px;
  background: #6d28d9;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  margin-top: 25px;
  transition: 0.3s;
  display: inline-block;
}

.btn:hover {
  box-shadow: 0 0 30px #c084fc;
  transform: scale(1.05);
}

/* ===== SECTION ===== */
.section {
  padding: 140px 20px;
  text-align: center;
  opacity: 0;
  transform: translateY(60px);
  transition: all 1s ease;
}

/* ===== CARDS ===== */
.card {
  background: rgba(60,20,110,0.35);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  margin: 40px auto;
  max-width: 600px;
  transition: 0.4s;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 0 40px #6d28d9;
}

/* ===== FOOTER ===== */
footer {
  padding: 60px;
  background: #140a28;
  text-align: center;
  font-size: 14px;
}

/* ===== MOBILE FIX ===== */
@media(max-width:768px){
  nav {
    flex-direction: column;
    gap: 10px;
  }
}
