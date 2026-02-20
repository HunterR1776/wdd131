const prsHistory = [
  {
    title: "The early beginings",
    location: "Various",
    date: "1850-01-01",
    tag: "foundations",
    summary: "The 1850s were the decade when long-range shooting really took off. It opened with the Minié Rifle, proceeded via the Crimean War and the Indian Mutiny, and closed with the introduction of the Whitworth and the founding of the National Rifle Association, the Final Stage of whose First Meeting in 1860 was shot at 1,000 yards.",
    imageUrl: "images/minie.jpeg"
  },
  {
    title: "The Skills of war",
    location: "United States",
    date: "1945-01-01",
    tag: "war",
    summary: "After the Second World War there was a surplus of men who had marksmanship experience and wished to continue honing their skills. Many of those men participating in NRA shoots",
    imageUrl: "images/war.jpeg"
  },
  {
    title: "Organized Shoots",
    location: "Williamsport, Pennsylvania",
    date: "1967-10-01",
    tag: "competition",
    summary: "In the small town, the first benchrest style shoot carried on its way. The range was 1,000 yards; it was the first of its kind due to governing rules in the sport only allowing ranges 600 yards and below. James Barger, who wielded a 7mm Remington 40X and banged out a 16-inch group, won the competition.",
    imageUrl: "images/competition.jpeg"
  },
  {
    title: "long range matches surge in popularity",
    location: "United States",
    date: "1990-01-01",
    tag: "popularity",
    summary: "Long-range shooting surged in popularity, with innovation in the gun community, it was easier and cheaper to become involved. During this time, long-range clubs were being founded all over the United States.",
    imageUrl: "images/1990.jpeg"
  },
  {
    title: "Precision Rifle Series",
    location: "United States",
    date: "2012-01-01",
    tag: "prs",
    summary: "In 2012, the Precision Rifle Series was established, providing a standard and framework that is followed throughout the country. The organization started with only 184 individuals and is now over 20,000",
    imageUrl: "images/prs.jpeg"
  }
];

const gallery = document.querySelector(".gallery");
const filterNav = document.querySelector(".filter-nav");

function createHistoryCard(list) {
  if (!gallery) return;
  gallery.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("section");
    const title = document.createElement("h3");
    const location = document.createElement("p");
    const date = document.createElement("p");
    const summary = document.createElement("p");
    const img = document.createElement("img");

    title.textContent = item.title;
    location.innerHTML = `<span class="label">Location:</span> ${item.location}`;
    date.innerHTML = `<span class="label">Date:</span> ${item.date}`;
    summary.innerHTML = `<span class="label">Summary:</span> ${item.summary}`;

    img.src = item.imageUrl;
    img.alt = `${item.title} history`;
    img.loading = "lazy";

    card.append(title, location, date, summary, img);
    gallery.appendChild(card);
  });
}

// initial display
createHistoryCard(prsHistory);

// filters
if (filterNav) {
  filterNav.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;

    const filter = button.dataset.filter;
    const filtered = prsHistory.filter((item) => {
      const year = new Date(item.date).getFullYear();
      if (filter === "old") return year < 1950;
      if (filter === "modern") return year >= 1950 && year < 2000;
      if (filter === "prs") return year >= 2000;
      return true;
    });

    createHistoryCard(filtered);
  });
}
