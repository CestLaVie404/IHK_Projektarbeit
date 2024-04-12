class TabsManager {
  constructor() {
    this.tabs = document.querySelectorAll(".tab-content");
    this.tabList = document.querySelectorAll(".tabs");
    this.attachTabClickListeners();
    this.openTab(0);
  }

  attachTabClickListeners() {
    this.tabList.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        this.openTab(index);
      });
    });
  }

  openTab(tabNumber) {
    this.tabs.forEach((tab) => {
      tab.style.display = "none";
    });
    this.tabList.forEach((tab) => {
      tab.classList.remove("tab-selected");
    });

    const tabContent = this.tabs[tabNumber];
    const tabElement = this.tabList[tabNumber];

    if (tabContent) {
      tabContent.style.display = "block";
      tabElement.classList.add("tab-selected");
    }
  }
}

window.addEventListener("load", () => {
  const tabsManager = new TabsManager();
  window.tabsManager = tabsManager;
});

function openTab(tabNumber) {
  tabsManager.openTab(tabNumber);
}
