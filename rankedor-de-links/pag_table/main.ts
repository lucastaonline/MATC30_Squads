class LinkInfo {
  constructor(
    public name: string,
    public url: string,
    public speed: number,
    public isPaid: boolean,
    public notes: string
  ) {}
}

class LinkRankingManager {
  private links: LinkInfo[] = [];

  addLink(link: LinkInfo) {
    this.links.push(link);
    this.sortBySpeed();
  }

  private sortBySpeed() {
    this.links.sort((a, b) => a.speed - b.speed);
  }

  filterAndRender(tableId: string) {
    const searchTerm = (document.getElementById("searchInput") as HTMLInputElement).value.toLowerCase();
    const paymentFilter = (document.getElementById("paymentFilter") as HTMLSelectElement).value;
    const minSpeed = parseInt((document.getElementById("minSpeed") as HTMLInputElement).value) || 0;
    const maxSpeed = parseInt((document.getElementById("maxSpeed") as HTMLInputElement).value) || Infinity;

    const filteredLinks = this.links.filter(link => {
      const matchName = link.name.toLowerCase().includes(searchTerm);
      const matchPayment =
        paymentFilter === "all" ||
        (paymentFilter === "paid" && link.isPaid) ||
        (paymentFilter === "free" && !link.isPaid);
      const matchSpeed = link.speed >= minSpeed && link.speed <= maxSpeed;

      return matchName && matchPayment && matchSpeed;
    });

    const tableBody = document.querySelector(`#${tableId} tbody`);
    if (!tableBody) return;
    tableBody.innerHTML = "";

    filteredLinks.forEach((link) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${link.name}</td>
        <td><a href="${link.url}" target="_blank">${link.url}</a></td>
        <td>${link.speed} ms</td>
        <td class="${link.isPaid ? "paid" : "free"}">${link.isPaid ? "Pago" : "Gratuito"}</td>
        <td>${link.notes}</td>
      `;

      tableBody.appendChild(row);
    });
  }
}

const manager = new LinkRankingManager();

manager.addLink(new LinkInfo("Google", "https://www.google.com", 50, false, "Busca global"));
manager.addLink(new LinkInfo("Netflix", "https://www.netflix.com", 200, true, "Streaming"));
manager.addLink(new LinkInfo("Wikipedia", "https://www.wikipedia.org", 100, false, "Enciclopédia"));
manager.addLink(new LinkInfo("Canva", "https://www.canva.com", 170, true, "Design gráfico"));
manager.addLink(new LinkInfo("DuckDuckGo", "https://duckduckgo.com", 80, false, "Busca privada"));

manager.filterAndRender("rankingTable");

["searchInput", "paymentFilter", "minSpeed", "maxSpeed"].forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", () => manager.filterAndRender("rankingTable"));
  }
});
