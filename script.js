document.addEventListener("DOMContentLoaded", () => {

  const countryList = document.getElementById("countryList");

  const visaList = document.getElementById("visaList");

  const visaDetails = document.getElementById("visaDetails");

  if (!countryList || !visaList || !visaDetails) return;

  function showCountries() {

    countryList.innerHTML = "";

    visaList.innerHTML = "";

    visaDetails.innerHTML = "";

    countries.forEach(country => {

      const card = document.createElement("div");

      card.className = "country-card";

      const img = document.createElement("img");

      img.src = country.image;

      img.alt = country.name;

      img.className = "country-image";

      const name = document.createElement("h3");

      name.textContent = country.flag + " " + country.name;

      card.appendChild(img);

      card.appendChild(name);

      card.addEventListener("click", () => {

        showVisas(country);

      });

      countryList.appendChild(card);

    });

  }

  function showVisas(country) {

    visaList.innerHTML = "";

    visaDetails.innerHTML = "";

    const heading = document.createElement("h3");

    heading.textContent = "ویزه‌های " + country.name;

    visaList.appendChild(heading);

    country.visas.forEach(visa => {

      const button = document.createElement("button");

      button.className = "visa-card";

      button.textContent = visa.icon + " " + visa.name;

      button.addEventListener("click", () => {

        showVisaDetails(visa);

      });

      visaList.appendChild(button);

    });

    visaList.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }

  function showVisaDetails(visa) {

    visaDetails.innerHTML = "";

    const heading = document.createElement("h3");

    heading.textContent = visa.name;

    visaDetails.appendChild(heading);

    const description = document.createElement("p");

    description.textContent = visa.description;

    visaDetails.appendChild(description);

    const price = document.createElement("p");

    price.textContent = "💰 هزینه ویزه: " + visa.fees;

    visaDetails.appendChild(price);

    if (visa.stayDuration) {

      const duration = document.createElement("p");

      duration.textContent = "🕒 مدت اقامت: " + visa.stayDuration;

      visaDetails.appendChild(duration);

    }

    if (visa.refund) {

      const refund = document.createElement("p");

      refund.textContent = "💵 شرایط بازپرداخت: " + visa.refund;

      visaDetails.appendChild(refund);

    }

    function addList(title, items) {

      const h4 = document.createElement("h4");

      h4.textContent = title;

      visaDetails.appendChild(h4);

      const ul = document.createElement("ul");

      if (!items || items.length === 0) {

        const li = document.createElement("li");

        li.textContent = "معلومات بعداً اضافه می‌شود";

        ul.appendChild(li);

      } else {

        items.forEach(item => {

          const li = document.createElement("li");

          li.textContent = item;

          ul.appendChild(li);

        });

      }

      visaDetails.appendChild(ul);

    }

    addList("مدارک مورد نیاز", visa.documents);

    addList("شرایط ویزه", visa.conditions);

    addList("مراحل درخواست", visa.steps);

    const time = document.createElement("p");

    time.textContent = "⏳ مدت زمان پروسه: " + visa.processingTime;

    visaDetails.appendChild(time);

    visaDetails.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }

  showCountries();

});
