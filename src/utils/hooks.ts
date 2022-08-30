export const useLinks = (type: string) => {
    var menuData = require("../data/Links.json");
    return menuData[type];
};

export const useSteps = () => {
    var stepsData = require("../data/Steps.json");
    return stepsData.steps;
};

export const useStep = (index: number) => {
    var singleStepData = require("../data/Steps.json").steps[index];
    return singleStepData;
};