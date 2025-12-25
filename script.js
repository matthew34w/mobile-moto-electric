// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple "mailto" form submission (works on any host)
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const name = data.get("name");
  const phone = data.get("phone");
  const bike = data.get("bike");
  const location = data.get("location");
  const issue = data.get("issue");

  const subject = encodeURIComponent(`Quote Request - ${bike}`);
  const body = encodeURIComponent(
`Name: ${name}
Phone: ${phone}
Bike: ${bike}
Location: ${location}

Issue:
${issue}
`);

  // Put YOUR email here:
  const to = "matthew34w@gmail.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
