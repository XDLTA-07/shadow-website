// Nav Bar

const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');


toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

// Nav Bar Ends
const slides = document.querySelectorAll('.slideshow .slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const productButtons = document.querySelectorAll(".purchase-btn");
  const body = document.querySelector("body");

  productButtons.forEach(button => {
      button.addEventListener("click", () => {
          showPaymentPopup();
      });
  });

  function showPaymentPopup() {
      // Create popup container
      const popup = document.createElement("div");
      popup.id = "paymentPopup";
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.backgroundColor = "#000";
      popup.style.borderRadius = "10px";
      popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      popup.style.width = "90%";
      popup.style.maxWidth = "600px";
      popup.style.zIndex = "1000";
      popup.style.padding = "20px";
      popup.style.color = "#fff";
      popup.style.fontFamily = "'Kanit', sans-serif";
      popup.style.textAlign = "center";
      

      // Close button
      const closeButton = document.createElement("button");
      closeButton.textContent = "×";
      closeButton.style.position = "absolute";
      closeButton.style.top = "10px";
      closeButton.style.right = "10px";
      closeButton.style.backgroundColor = "transparent";
      closeButton.style.color = "#fff";
      closeButton.style.border = "none";
      closeButton.style.cursor = "pointer";
      closeButton.style.fontSize = "20px";
      closeButton.addEventListener("click", () => {
          document.body.removeChild(popup);
      });
      popup.appendChild(closeButton);

      // QR Codes Section
      const qrSection = document.createElement("div");
      qrSection.style.display = "flex";
      qrSection.style.justifyContent = "space-around";
      qrSection.style.alignItems = "center";
      qrSection.style.marginBottom = "20px";

      const qrCodes = [
          { src: "https://media.discordapp.net/attachments/1324943836056911962/1328678926272434176/Screenshot_20250114-163813.jpg?ex=6787942d&is=678642ad&hm=696ede95cd20195df01e97c50e996acf9bd45ece5e84f1edb11c520f8c3dd9f1&=&format=webp&width=379&height=381", alt: "CashApp QR", name: "CashApp" },
          { src: "https://media.discordapp.net/attachments/1324943836056911962/1328678925974507551/Screenshot_20250114-163723.jpg?ex=6787942d&is=678642ad&hm=dd15211904c61c01f4d4bbb4196d9aefe0597aecd5d7e113d6146e31cf09d65a&=&format=webp&width=393&height=381", alt: "LTC QR", name: "Litecoin (LTC)" },
          { src: "https://media.discordapp.net/attachments/1324943836056911962/1328678925584306208/Screenshot_20250114-163552.jpg?ex=6787942d&is=678642ad&hm=05e98fe43b30a5311bdc0dd51fd2334edf502605f9a628f778e17375bc11e52b&=&format=webp&width=385&height=381", alt: "PayPal QR", name: "PayPal" }
      ];

      qrCodes.forEach(qr => {
          const qrContainer = document.createElement("div");
          qrContainer.style.textAlign = "center";

          const img = document.createElement("img");
          img.src = qr.src;
          img.alt = qr.alt;
          img.style.width = "80px";
          img.style.height = "80px";
          img.style.borderRadius = "5px";
          img.style.border = "2px solid #00aaff";
          qrContainer.appendChild(img);

          const label = document.createElement("p");
          label.textContent = qr.name;
          label.style.marginTop = "5px";
          label.style.color = "#00aaff";
          qrContainer.appendChild(label);

          qrSection.appendChild(qrContainer);
      });

      popup.appendChild(qrSection);

      // Payment Note
      const paymentNote = document.createElement("div");
      paymentNote.innerHTML = `
          <h3 style="margin-bottom: 10px; color: #00aaff;">💡How to claim ?</h3>
          <ol style="text-align: left; padding-left: 20px;">
              <li>🔹Step1: Pay first and include your Discord name in remarks for product claims.</li>
              <li>🔹Step2: Join our <a href="https://discord.gg/VyGbzTNzju" style="color: #00aaff; text-decoration: underline;">Discord server</a>.</li>
              <li>🔹Step3: Create a ticket in Discord with your payment screenshot.</li>
              <li>🔹Step4: If the price is N/A, do not proceed with the payment. No refunds for such payments.</li>
          </ol>
      `;
      popup.appendChild(paymentNote);

      // Join Discord Button
      const discordButton = document.createElement("a");
      discordButton.href = "https://discord.gg/VyGbzTNzju";
      discordButton.target = "_blank";
      discordButton.textContent = "Join Discord";
      discordButton.style.display = "inline-block";
      discordButton.style.marginTop = "15px";
      discordButton.style.padding = "10px 20px";
      discordButton.style.backgroundColor = "#00aaff";
      discordButton.style.color = "#000";
      discordButton.style.borderRadius = "5px";
      discordButton.style.textDecoration = "none";
      discordButton.style.fontWeight = "bold";
      discordButton.style.transition = "transform 0.2s";
      discordButton.addEventListener("mouseenter", () => {
          discordButton.style.transform = "scale(1.1)";
      });
      discordButton.addEventListener("mouseleave", () => {
          discordButton.style.transform = "scale(1)";
      });

      popup.appendChild(discordButton);

      // Append popup to body
      body.appendChild(popup);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchBarContainer = document.getElementById("searchBarContainer");
  const searchInput = document.getElementById("searchInput");
  const productNames = document.querySelectorAll(".product-name");

  // Toggle Search Bar Visibility
  searchButton.addEventListener("click", () => {
      const isVisible = searchBarContainer.style.opacity === "1";
      if (isVisible) {
          searchBarContainer.style.opacity = "0";
          searchBarContainer.style.transform = "translateY(-20px) scale(0.9)";
      } else {
          searchBarContainer.style.opacity = "1";
          searchBarContainer.style.transform = "translateY(0) scale(1)";
          searchInput.focus();
      }
  });

  // Handle Search Input
  searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      productNames.forEach((product) => {
          const productName = product.textContent.toLowerCase();

          // Check for matches and toggle visibility
          if (productName.includes(query)) {
              product.parentElement.parentElement.style.display = "block"; // Show product card
              product.classList.add("highlight"); // Highlight name
          } else {
              product.parentElement.parentElement.style.display = "none"; // Hide product card
              product.classList.remove("highlight"); // Remove highlight
          }
      });
  });

  // Clear Highlights if Search Box is Empty
  searchInput.addEventListener("blur", () => {
      if (searchInput.value.trim() === "") {
          productNames.forEach((product) => product.classList.remove("highlight"));
          
      }
  });
});

document.body.style.overflow = "hidden"; // Prevent scrolling
document.body.style.overflow = "auto"; // Restore scrolling

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.style.overflow = "auto"; // Restore scrolling for mobile
});



