import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function loadUpNumber(element, finalValue) {
    const increments = Math.ceil(finalValue / 20);
    for (let i = 0; i <= finalValue; i += increments) {
      element.textContent = i;
      await sleep(40);
    }
    element.textContent = finalValue;
  }

  function setStats(data) {
    const numberOfGuildsElement = document.querySelector("#numberOfGuilds");
    const totalMembersElement = document.querySelector("#totalMembers");
    const totalCommandsUsedElement =
      document.querySelector("#totalCommandsUsed");

    loadUpNumber(numberOfGuildsElement, data.numberOfGuilds);
    loadUpNumber(totalMembersElement, data.totalMembers);
    loadUpNumber(totalCommandsUsedElement, data.totalCommandsUsed);
  }

  function fetchStats() {
    fetch("https://hanger.av8.dev/api/bot/info")
      .then((response) => response.json())
      .then((data) => {
        if (!data[numberOfGuilds]) data[numberOfGuilds] = 6000;
        if (!data[totalMembers]) data[numberOfGuilds] = 100000;
        if (!data[totalCommandsUsed]) data[numberOfGuilds] = 200000;
        return data;
      })
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.error(error);
        const data = {
          numberOfGuilds: 6000,
          totalMembers: 1000000,
          totalCommandsUsed: 279707,
        };
        setStats(data);
      });
  }

  async function loadPage() {
    // await fetchStats();

    const observer = new MutationObserver(async (mutations) => {
      if (window.location.hash) {
        const doc = document.getElementById(window.location.hash);
        if (document.contains(doc)) {
          observer.disconnect();
          await sleep(1000);
          doc.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });

    observer.observe(document, {
      attributes: false,
      childList: true,
      characterData: false,
      subtree: true,
    });
  }

  loadPage();
}
