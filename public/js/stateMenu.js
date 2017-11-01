angular.module('app').factory('StateMenu', function () {
    var menuAll = [];
    var getMenu = function () {
        return menuAll;
    };
    var setMenu = function (menu) {
        try {
            firebase.database().ref('/App/Menu/').on('value', snapshot => {
                var data = [];
                var datas = [];
                snapshot.forEach((child) => {
                    data[child.key] = child.val();
                    datas.push({ key: child.key, data: child.val() });
                });
                menuAll = data;
                //console.log(menuAll);
            });
        } catch (e) {
            console.error(e);
        }
    };

    return {
        getMenu: getMenu,
        setMenu: setMenu
    }
});