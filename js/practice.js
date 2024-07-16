//practice1
function jumpalt1() {
    alert('謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您https://jsfiddle.net/yuhn5813/fbt63dvm/3/#報價！');
}

function jumpalt2() {
    alert('我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！');

}

function order_info() {
    //practice2 
    var name = document.getElementById('member_name').value;
    var phone = document.getElementById('member_phone').value;
    var mail = document.getElementById('member_mail').value;

    alert(name + '\n您好！謝謝您對我們的衣服有興趣！以下是您的訂購資訊\n電話：' + phone + '\nEmail：' + mail + '\n\n感謝您的訂購！');


    //practice3
    document.getElementById('order_name').textContent = name;
    document.getElementById('order_phone').textContent = phone;
    document.getElementById('order_mail').textContent = mail;

}

