
function getParameterByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

window.onload = function () {
  const from = getParameterByName("from");
  if (from) {
    document.getElementById("fromText").innerText = "आपको यह शुभकामना भेजी है: " + from;
  }
};

function generateLink() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("कृपया पहले अपना नाम दर्ज करें।");
    return;
  }

  const baseUrl = window.location.origin + window.location.pathname;
  const newUrl = baseUrl + "?from=" + encodeURIComponent(name);
  document.getElementById("generatedLink").value = newUrl;
  document.getElementById("linkBox").style.display = "block";

  const whatsappMsg = `🌸 राम नवमी की शुभकामनाएं 🌸\nयह शुभकामना भेजी है: *${name}*\n👇 अपना नाम जोड़ें और आगे भेजें\n${newUrl}`;
  document.getElementById("whatsappShare").href = `https://wa.me/?text=${encodeURIComponent(whatsappMsg)}`;
}
