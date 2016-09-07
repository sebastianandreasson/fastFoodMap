module.exports = {
    imageForName: (name) => {
        const imageName = name.replace(/[^0-9a-z]/gi, '').toLowerCase();
        let image;
        switch (imageName) {
            case "burgerking":
                return require("../images/burgerkingIcon.png");
            case "carlsjr":
                return require("../images/carlsjrIcon.png");
            case "chipotlemexicangrill":
                return require("../images/chipotleIcon.png");
            case "jackinthebox":
                return require("../images/jackintheboxIcon.png");
            case "kfc":
                return require("../images/kfcIcon.png");
            case "pandaexpress":
                return require("../images/pandaexpressIcon.png");
            case "macdonalds":
            case "mcdonalds":
                return require("../images/mcdonaldsIcon.png");
            case "subway":
                return require("../images/subwayIcon.png");
            case "superduperburger":
                return require("../images/superduperburgerIcon.png");
            case "tacobell":
                return require("../images/tacobellIcon.png");
            case "dominospizza":
                return require("../images/dominospizzaIcon.png");
            case "maxhamburgare":
                return require("../images/maxhamburgareIcon.png");
            case "pizzahut":
                return require("../images/pizzahutIcon.png");
            case "sibylla":
                return require("../images/sibyllaIcon.png");
            case "wendys":
                return require("../images/wendysIcon.png");
            default:
                return require("../images/defaultIcon.png");
        }
    },
    androidImageForName: (name) => {
        const imageName = name.replace(/[^0-9a-z]/gi, '').toLowerCase();
        let image;
        switch (imageName) {
            case "burgerking":
                return "image!burgerkingicon";
            case "carlsjr":
                return "image!carlsjricon";
            case "chipotlemexicangrill":
                return "image!chipotleicon";
            case "jackinthebox":
                return "image!jackintheboxicon";
            case "kfc":
                return "image!kfcicon";
            case "pandaexpress":
                return "image!pandaexpressicon";
            case "macdonalds":
            case "mcdonalds":
                return "image!mcdonaldsicon";
            case "subway":
                return "image!subwayicon";
            case "superduperburger":
                return "image!superduperburgericon";
            case "tacobell":
                return "image!tacobellicon";
            case "dominospizza":
                return "image!dominospizzaicon";
            case "maxhamburgare":
                return "image!maxhamburgareicon";
            case "pizzahut":
                return "image!pizzahuticon";
            case "sibylla":
                return "image!sibyllaicon";
            case "wendys":
                return "image!wendysicon";
            default:
                return "image!defaulticon";
        }
    }
};
