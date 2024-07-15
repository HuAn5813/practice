function jumpalt1() {
    alert('謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您https://jsfiddle.net/yuhn5813/fbt63dvm/3/#報價！');
}

function jumpalt2() {
    alert('我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！');

}

function order_info() {
    var name = document.getElementById('order_name').value;
    var num = document.getElementById('order_num').value;
    var mail = document.getElementById('order_mail').value;

    alert(name + '\n您好！謝謝您對我們的衣服有興趣！以下是您的訂購資訊\n電話：' + num + '\nEmail：' + mail + '\n\n感謝您的訂購！');
}