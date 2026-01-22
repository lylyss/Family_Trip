const analyticsState = { loaded: false };

export function loadAnalytics() {
  if (typeof window === "undefined" || analyticsState.loaded) return;
  const trackingId = import.meta.env.VITE_GA_ID;
  if (!trackingId) return console.warn("Missing VITE_GA_ID for analytics.");

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", trackingId);
  analyticsState.loaded = true;
}
