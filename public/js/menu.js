document.addEventListener('DOMContentLoaded', function () {
    try {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location.href = 'login.html';
            }
        });
        firebase.database().ref('/App/Users/').on('value', snapshot => {
            var data = [];
            var headers = [];
            var head;
            snapshot.forEach((child) => {
                console.log(child.val(), child.key);
                data.push(child.val());
                head = child.val();
            });
            for (keys in Object.keys(head)) {
                headers.push({ name: Object.keys(head)[keys] });
            }
            mGrid.create({
                container: 'container',
                headers: headers,
                data: data
            });
        });
    } catch (e) {
        console.error(e);
    }
});