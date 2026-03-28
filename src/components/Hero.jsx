import React from "react";

const Hero = () => {
  return (
    <section id="hero" style={{ paddingTop: "150px" }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap-reverse",
          gap: "4rem",
        }}
      >
        <div className="hero-text" style={{ flex: "1 1 500px" }}>
          <h3
            className="animate-fade-in"
            style={{ color: "var(--primary-color)", marginBottom: "1rem" }}
          >
            Halo, Nama Saya
          </h3>
          <h1
            className="animate-fade-in"
            style={{
              animationDelay: "0.2s",
              marginBottom: "0.5rem",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            }}
          >
            Wilson Eksaudi Sihombing<span className="text-gradient">.</span>
          </h1>
          <h3
            className="animate-fade-in"
            style={{
              color: "var(--text-muted)",
              fontWeight: 500,
              animationDelay: "0.4s",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            Mahasiswa Sistem Informasi & Pengembang Full-Stack Web serta Mobile.
          </h3>

          <div
            className="btn-group animate-fade-in"
            style={{ animationDelay: "0.6s", display: "flex", gap: "1rem" }}
          >
            <a href="#projects" className="btn btn-primary">
              Lihat Karya Saya
            </a>
            {/* Ganti nomor 628123456789 dengan nomor WhatsApp Anda */}
            <a
              href="https://wa.me/6282267296897?text=Halo%20Wilson,%20saya%20tertarik%20dengan%20portofolio%20Anda"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Saya (WA)
            </a>
          </div>
        </div>

        <div
          className="hero-image animate-fade-in"
          style={{
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            animationDelay: "0.4s",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "var(--primary-glow)",
              filter: "blur(80px)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          ></div>
          <div
            style={{
              width: "100%",
              maxWidth:
                "350px" /* Ukuran bingkai lingkarannya dikembalikan mengecil */,
              aspectRatio: "1/1",
              borderRadius: "50%",
              overflow:
                "hidden" /* Memotong semua bagian gambar yang keluar dari lingkaran */,
              border: "4px solid var(--primary-color)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <img
              src="/avatar_profile.png"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform:
                  "scale(1.3)" /* Meng-ZOOM ukuran gambar Anda sebesar 30% dari aslinya */,
                transformOrigin:
                  "center center" /* Titik fokus zoom berada di tengah */,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
