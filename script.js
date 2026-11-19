
document.addEventListener("DOMContentLoaded", () => {
  const countryList = document.getElementById("countryList");
  const visaList = document.getElementById("visaList");
  const visaDetails = document.getElementById("visaDetails");

  if (!countryList || !visaList || !visaDetails) {
    console.error("بخش‌های نمایش کشورها و ویزه‌ها در HTML پیدا نشدند.");
    return;
  }

  // نمایش فهرست کشورها
  function showCountries() {
    countryList.innerHTML = "";
    visaList.innerHTML = "";
    visaDetails.innerHTML = "";

    countries.forEach(country => {
      const button = document.createElement("button");
      button.className = "country-card";
      button.textContent = `${country.flag} ${country.name}`;

      button.addEventListener("click", () => {
        showVisas(country);
      });

      countryList.appendChild(button);
    });
  }

  // نمایش ویزه‌های هر کشور
  function showVisas(country) {
    visaList.innerHTML = "";
    visaDetails.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = `ویزه‌های ${country.name}`;
    visaList.appendChild(heading);

    country.visas.forEach(visa => {
      const button = document.createElement("button");
      button.className = "visa-card";
      button.textContent = `${visa.icon} ${visa.name}`;

      button.addEventListener("click", () => {
        showVisaDetails(visa);
      });

      visaList.appendChild(button);
    });
  }

  // نمایش جزئیات ویزه
  function showVisaDetails(visa) {
    visaDetails.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = visa.name;
    visaDetails.appendChild(title);

    const description = document.createElement("p");
    description.textContent = visa.description;
    visaDetails.appendChild(description);

    addSection("مدارک مورد نیاز", visa.documents);
    addSection("شرایط ویزه", visa.conditions);
    addSection("مراحل درخواست", visa.steps);

    const fees = document.createElement("p");
    fees.textContent = `هزینه ویزه: ${visa.fees}`;
    visaDetails.appendChild(fees);

    const time = document.createElement("p");
    time.textContent = `مدت زمان پروسه: ${visa.processingTime}`;
    visaDetails.appendChild(time);

    function addSection(titleText, items) {
      const heading = document.createElement("h4");
      heading.textContent = titleText;
      visaDetails.appendChild(heading);

      const list = document.createElement("ul");

      if (items.length === 0) {
        const item = document.createElement("li");
        item.textContent = "معلومات بعداً اضافه می‌شود";
        list.appendChild(item);
      } else {
        items.forEach(value => {
          const item = document.createElement("li");
          item.textContent = value;
          list.appendChild(item);
        });
      }

      visaDetails.appendChild(list);
    }
  }

  showCountries();
});
