export const useLinks = (type: string) => {
    var menuData = require("../data/Links.json");
    return menuData[type];
};