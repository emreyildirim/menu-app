import getSubNameHelper from "./getSubNameHelper";
import * as keys from "./keys";
export default function getMenuSelector(state, id, subId) {
  const main = state.menu.find((item) => item.key === keys.MAIN);
  const menu = state.menu.find((item) => item.key === id);



  if (menu && !subId) {
    return [menu.items, menu.key];
  }

  if (menu && subId) {
    const subName = getSubNameHelper(subId);
    const subMenu = menu.items.find(
      (item) => item.name.toLocaleLowerCase("tr-TR") === subName
    );
    return [subMenu.items, menu.key];
  }

  //get main
  if (main && id) {
    const name = id.split("-").join(" ");
    const selectedMenu = main.items.find(
      (item) => item.name.toLocaleLowerCase("tr-TR") === name
    );

    if (selectedMenu.items) {
      //get sub menu
      if (subId) {
        const subName = getSubNameHelper(subId);
        const subSelectedMenu = selectedMenu.items.find(
          (item) => item.name.toLocaleLowerCase("tr-TR") === subName
        );

        if (subSelectedMenu) {
          const subMenus = subSelectedMenu.subMenus;
          if (subMenus) {
            const allMenus = subMenus.map((subKey) => {
              const subMenu = state.menu.find((item) => item.key === subKey);
              return subMenu;
            });
            return [allMenus];
          }
        }
      }
      return [selectedMenu.items];
    }
  }
  return main ? [main.items] : [[], ""];
}
