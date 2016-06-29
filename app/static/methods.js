module.exports = {
    imageForName: (name) => {
        const imageName = name.replace(/[^0-9a-z]/gi, '').toLowerCase();
        let image;
        switch (imageName) {
            case "burgerking":
                return require("../images/burgerkingIcon.png");
                break;
            case "carlsjr":
                return require("../images/carlsjrIcon.png");
            case "chipotle":
                return require("../images/chipotleIcon.png");
            case "jackinthebox":
                return require("../images/jackintheboxIcon.png");
            case "kfc":
                return require("../images/kfcIcon.png");
            case "pandaexpress":
                return require("../images/pandaexpressIcon.png");
            case "macdonalds":
                return require("../images/macdonaldsIcon.png");
            case "subway":
                return require("../images/subwayIcon.png");
            case "superduperburger":
                return require("../images/superduperburgerIcon.png");
            default:
                return require("../images/defaultIcon.png");
        }
    }
};
