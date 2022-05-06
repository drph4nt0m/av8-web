function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadUpNumber(element, finalValue) {
    const increments = Math.ceil(finalValue / 20);
    for (let i = 0; i <= finalValue; i+=increments) {
        element.textContent = i;
        await sleep(40);
    }
    element.textContent = finalValue;
}

function setStats(data) {
    const numberOfGuildsElement = document.querySelector('#numberOfGuilds');
    const totalMembersElement = document.querySelector('#totalMembers');
    const totalCommandsUsedElement = document.querySelector('#totalCommandsUsed');

    loadUpNumber(numberOfGuildsElement, data.numberOfGuilds);
    loadUpNumber(totalMembersElement, data.totalMembers);
    loadUpNumber(totalCommandsUsedElement, data.totalCommandsUsed);

}

fetch('http://localhost:4444/api/bot/info')
  .then(response => response.json())
  .then(data => {
      if (!data[numberOfGuilds]) data[numberOfGuilds] = 6000;
      if (!data[totalMembers]) data[numberOfGuilds] = 1000000;
      if (!data[totalCommandsUsed]) data[numberOfGuilds] = 279707;
      return data;
  })
  .then(data => {
      setStats(data);
  })
  .catch(error => {
      data = {
          numberOfGuilds: 6000,
          totalMembers: 1000000,
          totalCommandsUsed: 279707
      }
      setStats(data);
  });